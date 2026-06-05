'use client'

import ProfileUpdateModal from "@/Components/ProfileUpdateModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";

const MyProfilePage = () => {
    // const [userProfile, setUserProfile] = useState(null);
    const { data: session, isPending, refetch } = authClient.useSession();
    // console.log("session from my prfile page:", session);
    console.log(authClient.useSession());

    const user = session?.user;

    // useEffect(()=>{
    //     if(session?.user){
    //         setUserProfile(session.user)
    //     }
    // }, [session])

    if (isPending) {
        return <div className="text-center py-20">Loading profile data...</div>;
    }

    if (!session?.user) {
        return <div className="text-center py-20">No user data found. Please login.</div>;
    }
    // const user = userProfile;

    const initials = user?.name
        ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
        : "?";

    return (
        <div className="min-h-screen bg-[#f0f4f3] px-4 py-8 sm:py-12 font-sans">
            <div className="max-w-md mx-auto">

                
                <div className="bg-[#4A6B6F] rounded-[20px] px-6 pt-8 pb-14 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#DDE6D8]/10" />
                    <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-[#DDE6D8]/[0.07]" />
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-[#DDE6D8]/60 overflow-hidden flex-shrink-0 bg-[#5DCAA5] flex items-center justify-center">
                            {user?.image ? (
                                <Image
                                    src={user.image}
                                    alt="profile"
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl font-semibold text-[#DDE6D8]">{initials}</span>
                            )}
                        </div>
                        <div>
                            <h1 className="text-[22px] font-semibold text-white tracking-tight leading-tight">
                                {user?.name || "Loading..."}
                            </h1>
                            <span className="inline-flex items-center gap-1.5 mt-2 bg-[#5DCAA5]/25 text-[#9FE1CB] text-xs px-3 py-1 rounded-full">
                                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Verified account
                            </span>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(74,107,111,0.10)] mx-1 -mt-10 relative z-10 px-5 pt-6 pb-5">

                    {[
                        {
                            label: "Full name",
                            value: user?.name || "—",
                            mono: false,
                            icon: (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                                </svg>
                            )
                        },
                        {
                            label: "Email address",
                            value: user?.email || "—",
                            mono: false,
                            icon: (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            )
                        },
                        {
                            label: "Account ID",
                            value: user?.id || "—",
                            mono: true,
                            icon: (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                                </svg>
                            )
                        },
                    ].map((item, i, arr) => (
                        <div key={item.label} className={`flex items-center gap-4 py-4 ${i < arr.length - 1 ? "border-b border-[#f0f4f3]" : ""}`}>
                            <div className="w-10 h-10 rounded-xl bg-[#f0f4f3] flex items-center justify-center text-[#4A6B6F] flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] uppercase tracking-wide text-[#9aa5a6] mb-0.5">{item.label}</p>
                                <p className={`font-medium truncate ${item.mono ? "text-[12px] text-[#6b8487] font-mono" : "text-[15px] text-[#1a2e2f]"}`}>
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}

                    {user && <ProfileUpdateModal user={user} refetch={refetch} ></ProfileUpdateModal>}
                </div>

            </div>
        </div>
    );
};

export default MyProfilePage;