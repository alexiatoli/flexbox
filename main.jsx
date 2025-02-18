import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaBook, FaBullhorn, FaTasks } from "react-icons/fa";

const sections = [
  { title: "Assignments", icon: <FaTasks />, description: "View and submit your assignments." },
  { title: "Announcements", icon: <FaBullhorn />, description: "Stay updated with the latest news." },
  { title: "Resources", icon: <FaBook />, description: "Find study materials and guides." }
];

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Mrs. Higgins' Classroom</h1>
      <img src="/smaller_viking.png" alt="Viking Icon" className="w-16 h-16 mb-4" />
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-64"
          >
            <Card className="p-4 flex flex-col items-center shadow-lg bg-white rounded-xl border border-gray-200">
              <div className="text-4xl text-blue-600 mb-4">{section.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-600 text-center">{section.description}</p>
              <Button className="mt-4">Go to {section.title}</Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
