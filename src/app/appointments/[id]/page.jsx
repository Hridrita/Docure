import DoctorDetailsPageClient from "@/Components/DoctorDetailsPageClient";


const DoctorDetailsPage = async ({ params }) => {
const { id } = await params;

  // fetch doctor data
  const res = await fetch(`http://localhost:5000/doctors/${id}`);
  const doctor = await res.json();

  return <DoctorDetailsPageClient doctor={doctor}></DoctorDetailsPageClient>
};

export default DoctorDetailsPage;