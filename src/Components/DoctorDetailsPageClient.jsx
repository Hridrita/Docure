'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaHospital, FaClock, FaStar } from "react-icons/fa";
import AppointmentModal from "./AppointmentModal";

const DoctorDetailsPageClient = ({ doctor }) => {

  // useEffect(()=>{
  //   if(doctor){
  //     localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
  //   }
  // },[doctor]);

  useEffect(() => {
  if (typeof window !== 'undefined' && doctor) {
    localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
  }
}, [doctor]);
  
   
  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      <div className="w-full bg-[#4A6B6F] h-26 relative" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10">
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
          <div className="relative shrink-0 -mt-20">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4A6B6F]">
                  {doctor.name}
                </h1>
                <p className="text-[#4A6B6F]/70 font-medium mt-1">
                  {doctor.specialty}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {doctor.experience} experience
                </p>
              </div>
              <div className="flex items-center gap-1 bg-[#DDE6D8] px-4 py-2 rounded-full">
                <FaStar className="text-yellow-500 text-sm" />
                <span className="font-bold text-[#4A6B6F] text-sm">4.8</span>
                <span className="text-[#4A6B6F]/60 text-xs">(124 reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-[#DDE6D8] text-[#4A6B6F] text-xs font-semibold px-3 py-1 rounded-full">
                {doctor.specialty}
              </span>
              <span className="bg-[#DDE6D8] text-[#4A6B6F] text-xs font-semibold px-3 py-1 rounded-full">
                {doctor.experience}
              </span>
              <span className="bg-[#4A6B6F] text-[#DDE6D8] text-xs font-semibold px-3 py-1 rounded-full">
                ৳{doctor.fee} / visit
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#4A6B6F] mb-3 border-b border-[#DDE6D8] pb-2">
                About
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                {doctor.description}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#4A6B6F] mb-4 border-b border-[#DDE6D8] pb-2">
                Available Time Slots
              </h2>
              <div className="flex flex-wrap gap-3">
                {Array.isArray(doctor.availability) ? (
                  doctor.availability.map((slot, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 border border-[#4A6B6F]/30 text-[#4A6B6F] text-sm font-medium px-4 py-2 rounded-xl bg-[#f5f7f5]"
                    >
                      <FaClock className="text-xs opacity-60" />
                      {slot}
                    </span>
                  ))
                ) : (
                  <span className="flex items-center gap-2 border border-[#4A6B6F]/30 text-[#4A6B6F] text-sm font-medium px-4 py-2 rounded-xl bg-[#f5f7f5]">
                    <FaClock className="text-xs opacity-60" />
                    {doctor.availability}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#4A6B6F] mb-4 border-b border-[#DDE6D8] pb-2">
                Details
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-sm">
                  <FaHospital className="text-[#4A6B6F] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Hospital
                    </p>
                    <p className="font-semibold text-gray-700">
                      {doctor.hospital}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaMapMarkerAlt className="text-[#4A6B6F] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Location
                    </p>
                    <p className="font-semibold text-gray-700">
                      {doctor.location}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaClock className="text-[#4A6B6F] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Experience
                    </p>
                    <p className="font-semibold text-gray-700">
                      {doctor.experience}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#4A6B6F] rounded-3xl shadow-sm p-6 flex flex-col gap-4">
              <div>
                <p className="text-[#DDE6D8]/70 text-xs uppercase tracking-widest">
                  Consultation Fee
                </p>
                <p className="text-3xl font-extrabold text-white mt-1">
                  ৳{doctor.fee}
                </p>
              </div>
              
                <AppointmentModal doctor={doctor} />
              

              {/* {isModalOpen && (<AppointmentModal doctor={doctor} onClose={()=>setIsModalOpen(false)}></AppointmentModal>)} */}
              <Link
                href="/appointments"
                className="w-full text-center text-[#DDE6D8]/80 hover:text-white text-xs transition"
              >
                ← Back to all doctors
              </Link>
            </div>
          </div>
        </div>

        <div className="h-12" />
      </div>
    </div>
  );
};

export default DoctorDetailsPageClient;
