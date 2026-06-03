import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyBookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log("session",session);

    const user = session?.user;
    // console.log("user:",user);

    try{
        const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }


    return (
        <div>
            my booking page
        </div>
    );
};

export default MyBookingPage;