import DoctorDetailsPageClient from "@/Components/DoctorDetailsPageClient";
import { notFound } from 'next/navigation';


const DoctorDetailsPage = async ({ params }) => {
const { id } = await params;

  // fetch doctor data
  const res = await fetch(`http://localhost:5000/doctors/${id}`,{
    headers: {
      Authorization: "logged in"
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    notFound(); 
  }
  const doctor = await res.json();
  console.log('doctors data:', doctor);

  if (!doctor || !doctor.name) {
    return <div>Doctor details not found or invalid data.</div>;
  }

  return <DoctorDetailsPageClient doctor={doctor}></DoctorDetailsPageClient>
};

export default DoctorDetailsPage;