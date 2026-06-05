"use client";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "sonner";

const AllAppointsmentClient = () => {
    const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDoctors = async () => {
    try {
        
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      setDoctors(data);
    } catch (error) {
      toast.error("There has some problem in fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();

    const interval = setInterval(() => {
      fetchDoctors();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    );
    return (
        <div className="bg-[#DDE6D8] min-h-screen py-10 px-4">
      <div className="text-center mb-16 mt-5 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4A6B6F] mb-4">
          <span className="italic text-[#4A6B6F] font-serif ml-3">
            Meet Professional Doctors & Specialists
          </span>
        </h1>
        <p className="text-medium text-gray-600 max-w-2xl mx-auto px-2">
          Connect with top-tier medical specialists through our verified
          platform, designed to provide you with seamless access to high-quality
          healthcare and expert consultations whenever you need them.
        </p>
        <div className="max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="Search doctors by name..."
            className="w-full px-5 py-3 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4A6B6F]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => 
        (
          <div
            key={doc._id}
            className="card bg-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <figure className="relative h-68 w-full">
              <Image
                src={
                  doc.image && doc.image.startsWith("https")
                    ? doc.image
                    : "https://i.ibb.co/R4pT6VHt/image.png"
                }
                alt={doc.name}
                fill
                className="object-cover"
              />
            </figure>

            <div className="card-body p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {doc.name}
              </h2>
              <p className="text-[#4A6B6F] font-semibold text-sm uppercase tracking-wide mb-2">
                {doc.specialty}
              </p>

              <div className="card-actions justify-center mt-2">
                <Link href={`/appointments/${doc._id}`}>
                  <button className="w-full bg-[#4A6B6F] text-white px-3 py-2 rounded-lg font-medium hover:bg-[#3d595d] transition-colors ">
                    <span className="flex items-center gap-4">
                      View Profile
                      <FaArrowRightLong className="bg-[#DDE6D8] rounded-full p-2 text-[#4A6B6F] h-8 w-8" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))) : (
          <div className="col-span-full text-center py-10 text-xl text-[#4A6B6F] font-bold">
      No doctor was found 
    </div>
        )}
      </div>
    </div>
    );
};

export default AllAppointsmentClient;