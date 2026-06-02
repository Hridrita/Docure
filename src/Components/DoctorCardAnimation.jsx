"use client";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { DoctorDetailsButton } from "@/Components/DoctorDetailsButton";
import Image from "next/image";

export default function DoctorCardAnimation({ doctor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-4 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex-col items-center text-center">
          <Image
            alt={doctor.name}
            className="object-cover rounded-full h-32 w-32 border-4 border-[#DDE6D8]"
            src={doctor.image}
            width={128}
            height={128}
            unoptimized
          />
          <h4 className="font-bold text-xl mt-4 text-[#4A6B6F]">{doctor.name}</h4>
          <p className="text-sm text-gray-400 font-medium">{doctor.specialty}</p>
        </div>
        <div className="text-center my-4">
          <p className="text-gray-600 text-sm">
            Rating: ⭐ {doctor.rating} | Experience: {doctor.experience} yrs
          </p>
        </div>
        <div className="justify-center flex">
          <DoctorDetailsButton doctorId={doctor._id} />
        </div>
      </Card>
    </motion.div>
  );
}