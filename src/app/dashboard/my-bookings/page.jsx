import MyBookingsCard from "@/Components/MyBookingsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";




const MyBookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log("session",session);

    const user = session?.user;
    // console.log("user:",user);

    let bookings = [];

    try{
        const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
        bookings = await res.json();
        console.log(bookings);
    } catch (error) {
        console.log(error);
    }


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-semibold text-3xl mb-5 mt-8">My bookings</h1>
            <div className="space-y-5 pb-6">
                {
                    bookings.map((booking)=>(
                    <MyBookingsCard key={booking._id} booking={booking}></MyBookingsCard>
                ))
                }
            </div>
        </div>
    );
};

export default MyBookingPage;