import DoctorDetailsPageClient from "@/Components/DoctorDetailsPageClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const {token} = await auth.api.getToken({
  headers: await headers()
})
  
  const res = await fetch(`http://localhost:5000/doctors/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    return { title: 'Doctor Not Found' };
  }

  const doctor = await res.json();

  return {
    title: `${doctor.name} - Details`,
    description: doctor.description || `View details for ${doctor.name}`,
  };
}

const DoctorDetailsPage = async ({ params }) => {
const { id } = await params;
const {token} = await auth.api.getToken({
  headers: await headers()
})
console.log('token:',token);

  // fetch doctor data
  const res = await fetch(`http://localhost:5000/doctors/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
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