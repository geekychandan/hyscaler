"use client";
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRating, setOverallRating] = useState(null); // Dynamic overall rating
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log("🚀 ~ file: page.jsx:11 ~ GetFeedback ~ result:", result);
    setFeedbackList(result);

    // Calculate overall rating based on individual ratings
    if (result.length > 0) {
      const totalRating = result.reduce((sum, item) => sum + (item.rating || 0), 0); // Safely handle missing ratings
      const ratingCount = result.filter(item => item.rating !== null && item.rating !== undefined).length; // Count non-null ratings
      const averageRating = (ratingCount > 0) ? (totalRating / ratingCount).toFixed(1) : null; // Calculate average if there are ratings
      setOverallRating(averageRating);
    } else {
      setOverallRating(null); // No ratings available
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      {feedbackList?.length === 0 ? (
        <h2 className="font-bold text-lg text-green-500">
          No interview Feedback
        </h2>
      ) : (
        <>
          {/* <h2 className="text-primary text-lg my-2">
            Your overall interview rating: <strong>{overallRating ? `${overallRating}/10` : "N/A"}</strong>
          </h2> */}
          <h2 className="text-sm text-gray-500">
            Find below interview questions with correct answers, your answer,
            and feedback for improvements for your next interview:
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 flex justify-between bg-secondary rounded-lg my-2 text-left gap-7 w-full">
                  {item.question} <ChevronsUpDown className="h-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating || "N/A"}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer Looks Like: </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Button className="mt-5" onClick={() => router.replace('/')}>
        Go Home
      </Button>
    </div>
  );
};

export default Feedback;
