"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import Webcam from "react-webcam";

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  // Append results to userAnswer state
  useEffect(() => {
    if (results.length > 0) {
      const finalTranscript = results.map((result) => result.transcript).join(" ");
      setUserAnswer((prevAns) => prevAns + finalTranscript);
      console.log("Updated UserAnswer:", userAnswer);
      setResults([]); // Clear results after processing
    }
  }, [results]);

  // Automatically save the answer when recording stops and length > 10
  useEffect(() => {
    console.log("useEffect triggered:", { isRecording, userAnswer });
    if (!isRecording && userAnswer.length > 10) {
      console.log("Calling UpdateUserAnswer...");
      UpdateUserAnswer();
    }
  }, [isRecording]);

  const StartStopRecording = async () => {
    if (isRecording) {
      console.log("Stopping recording...");
      stopSpeechToText();
      
    } else {
      console.log("Starting recording...");
      setUserAnswer(""); // Clear for a fresh recording
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    try {
      console.log("User Answer:", userAnswer);
      setLoading(true);

      const feedbackPrompt = `
      You are an expert interviewer evaluating answers for mock interviews. 
      Given the following question and user answer, your task is to analyze the response based on clarity, relevance, completeness, and depth of understanding. 
      
      1. Rate the answer on a scale of 1 to 5:
         - 1: Poor (completely irrelevant or incoherent).
         - 2: Below Average (partially correct but lacks depth or clarity).
         - 3: Average (mostly correct but could be improved with more details or better structure).
         - 4: Good (clear, relevant, and mostly complete but with minor room for improvement).
         - 5: Excellent (comprehensive, well-structured, and fully relevant). 
      
      2. Provide feedback in 2-3 concise sentences, focusing on areas of improvement and strengths of the answer.
      
      Return the output strictly in the following JSON format:
      {
        "rating": <number>,
        "feedback": "<text>"
      }
      
      Here is the question and answer:
      Question: "${mockInterviewQuestion[activeQuestionIndex]?.question}"
      User Answer: "${userAnswer}"
      `;
      
      console.log("Feedback Prompt:", feedbackPrompt);

      const result = await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp = result.response
        .text()
        .replace("```json", "")
        .replace("```", "");

      console.log("Raw Response:", mockJsonResp);
      const JsonfeedbackResp = JSON.parse(mockJsonResp);

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonfeedbackResp?.feedback,
        rating: JsonfeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      });

      if (resp) {
        toast("User Answer recorded successfully");
        setUserAnswer("");
        setResults([]);
      }
    } catch (error) {
      console.error("Error in UpdateUserAnswer:", error);
      toast("An error occurred while saving your answer.");
    } finally {
      setLoading(false);
      setResults([]);
    }
  };

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
          alt="webcam"
          priority
        />
        <Webcam
          style={{ height: 300, width: "100%", zIndex: 10 }}
          mirrored={true}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 items-center animate-pulse flex gap-2">
            <StopCircle /> Stop Recording...
          </h2>
        ) : (
          <h2 className="text-primary flex gap-2 items-center">
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;
