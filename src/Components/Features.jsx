import { Card } from "@heroui/react";
import { DoctorDetailsButton } from "@/Components/DoctorDetailsButton";
import Image from "next/image";
import DoctorCardAnimation from "./DoctorCardAnimation"; 

const Features = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, { cache: 'no-store' });
    const doctors = await res.json();

    return (
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="italic text-[#4A6B6F] text-4xl font-bold font-serif ml-3">
              Top Rated Doctors
            </h2>
            <p className="text-gray-500 mt-3">
              Choose from our highly qualified and experienced medical specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              
              <DoctorCardAnimation key={doctor._id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load top-rated doctors. Please try again later.
      </div>
    );
  }
};

export default Features;