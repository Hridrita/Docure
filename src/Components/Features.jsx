import { Card } from "@heroui/react";
import { DoctorDetailsButton } from "@/Components/DoctorDetailsButton";
import Image from "next/image";

const Features = async () => {
  try {
    const res = await fetch("http://localhost:5000/featured");
    const doctors = await res.json();
    console.log(doctors);

    return (
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#4A6B6F]">
              Top Rated Doctors
            </h2>
            <p className="text-gray-500 mt-3">
              Choose from our highly qualified and experienced medical
              specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card
                key={doctor._id}
                className="p-4 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex-col items-center">
                  <Image
                    alt={doctor.name}
                    className="object-cover rounded-full h-32 w-32 border-4 border-[#DDE6D8]"
                    src={doctor.image}
                    width={128}
                    height={128}
                    unoptimized
                  />
                  <h4 className="font-bold text-xl mt-4 text-[#4A6B6F]">
                    {doctor.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-medium">
                    {doctor.specialty}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    Rating: ⭐ {doctor.rating} | Experience: {doctor.experience}{" "}
                    yrs
                  </p>
                </div>
                <div className="justify-center">
                  <DoctorDetailsButton doctorId={doctor._id} />
                </div>
              </Card>
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
