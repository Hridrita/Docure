// components/DoctorDetailsButton.jsx
"use client";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const DoctorDetailsButton = ({ doctorId }) => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const handleClick = () => {
        if (session) {
            router.push(`/appointments/${doctorId}`);
        } else {
            router.push("/login");
        }
    };

    return (
        <Button 
            onClick={handleClick}
            className="bg-[#4A6B6F] text-white font-bold px-8 rounded-xl hover:bg-[#3d5a5e]"
        >
            View Details
        </Button>
    );
};