'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ClientWrapper({ children }) {
  return <motion.div>{children}</motion.div>
}

