'use client'
import MyBookingsCard from "@/Components/MyBookingsCard";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

const MyBookingPageClient = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.id) return;
      try {
        const { data: tokenData } = await authClient.token();
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${tokenData?.token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user?.id]);

  const handleBookingUpdate = (updatedBooking) => {
    setBookings((prev) => prev.map((b) => b._id === updatedBooking._id ? { ...b, ...updatedBooking } : b));
  };

  const handleBookingDelete = (id) => {
    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      <div className="max-w-3xl mx-auto px-4">
        <Toaster />
        <h1 className="font-semibold text-3xl mb-5 mt-8">My Appointments</h1>
        {loading ? (
          <p className="text-gray-400 mt-10">Loading...</p>
        ) : bookings.length > 0 ? (
          <div className="space-y-5 pb-6">
            {bookings.map((booking) => (
              <MyBookingsCard
                key={booking._id}
                booking={booking}
                onUpdate={handleBookingUpdate}
                onDelete={handleBookingDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-6 bg-gray-50 rounded-xl mt-10 mb-20">
            <h2 className="text-xl text-gray-600">You have no appointment yet</h2>
            <Link href="/appointments" className="text-[#4A6B6F] font-bold underline mt-2 block">
              Book an appointment now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingPageClient;