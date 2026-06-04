'use client'
import MyBookingsCard from "@/Components/MyBookingsCard";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const MyBookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;

 
  useEffect(() => {
    if (user?.id) {
      fetch(`http://localhost:5000/bookings/${user.id}`)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((error) => console.log(error));
    }
  }, [user?.id]);

  
  const handleBookingUpdate = (updatedBooking) => {
    setBookings((prevBookings) =>
      prevBookings.map((b) =>
        b._id === updatedBooking._id ? { ...b, ...updatedBooking } : b
      )
    );
  };

  const handleBookingDelete = (id) =>{
    setBookings((prev) => prev.filter((b)=> b._id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto">
        <Toaster></Toaster>
      <h1 className="font-semibold text-3xl mb-5 mt-8">My Appointments</h1>
      <div className="space-y-5 pb-6">
        {bookings?.map((booking) => (
          <MyBookingsCard 
            key={booking._id} 
            booking={booking} 
            onUpdate={handleBookingUpdate} 
            onDelete={handleBookingDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;