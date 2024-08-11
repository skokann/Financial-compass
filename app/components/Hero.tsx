"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center justify-between gap-8 pt-7 min-h-screen">
      <motion.h1
        className="text-white text-4xl leading-tight  tracking-tighter font-semibold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Financial Compass
      </motion.h1>
      <motion.p
        className="text-[#BAC3C0] text-2xl text-center font-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Personal guide for managing expenses.
      </motion.p>
      <motion.div
        className="max-w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="bg-[#144E3E] rounded-lg p-6 w-full flex flex-col justify-center items-center gap-5 text-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-[#F0F0F0] font-medium  text-2xl">
            Prepare to Save
          </h2>
          <p className="text-[#F0F0F0] leading-6">
            Answer a few simple questions to help us tailor your experience and
            guide your financial decisions. Let’s start with your spending
            habits.
          </p>
          <motion.button
            className="bg-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="mt-auto flex flex-col justify-center bg-[#144E3E] p-3 rounded-lg gap-5 items-center w-full">
        <p className="text-left text-xs">
          By using this app, you agree to secure data storage and encryption.
          Your information remains private and inaccessible to others.
        </p>
        <div className="flex flex-row gap-2">
          <button className="w-24 h-8 bg-red-600 rounded-lg">Learn more</button>
          <button className="w-24 h-8 bg-white text-black rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
