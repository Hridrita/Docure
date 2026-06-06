"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { GiArchiveRegister } from "react-icons/gi";
import { authClient } from "@/lib/auth-client";
import {Avatar, Button} from "@heroui/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [dashOpen, setDashOpen] = useState(false);
  const {data:session} = authClient.useSession()
  console.log(session);

//   useEffect(() => {
  
// }, [session]);

  const user = session?.user;
  console.log(user);

  const handleSignOut = async() =>{
    await authClient.signOut();
  }

  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const links = (
  <>
    <li>
      <Link href={"/"} className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/") ? "text-white font-bold" : ""}`}>
        Home
      </Link>
    </li>
    <li>
      <Link href={"/appointments"} className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/appointments") ? "text-white font-bold" : ""}`}>
        All Appointments
      </Link>
    </li>
    <li className="relative">
      <button
        onClick={() => setDashOpen(!dashOpen)}
        className={`hover:text-white cursor-pointer flex items-center gap-1 transition-colors text-base ${pathname?.startsWith("/dashboard") ? "text-white font-bold" : "text-[#DDE6D8]"}`}
      >
        Dashboard
        <svg className={`w-4 h-4 transition-transform ${dashOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {dashOpen && (
        <ul className="absolute top-full left-0 mt-2 bg-white rounded-xl w-44 py-2 shadow-2xl z-[100] border border-gray-100">
          <li>
            <Link href="/dashboard/my-bookings" onClick={() => setDashOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#4A6B6F] font-medium transition-colors">
              My Appointments
            </Link>
          </li>
          <li>
            <Link href="/dashboard/my-profile" onClick={() => setDashOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#4A6B6F] font-medium transition-colors">
              My Profile
            </Link>
          </li>
        </ul>
      )}
    </li>
    <li>
      <Link href={"/add-doctor"} className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/add-doctor") ? "text-white font-bold" : ""}`}>
        Add Doctor
      </Link>
    </li>
  </>
);

  return (
    <div className="navbar !bg-[#4A6B6F] shadow-sm px-4 lg:px-10 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-[#DDE6D8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#4A6B6F] rounded-box z-[50] mt-3 w-52 p-4 shadow-2xl text-white gap-2 border border-[#DDE6D8]/20"
          >
            <li className="hover:bg-[#DDE6D8]/20 rounded-lg transition-all duration-200">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-[#DDE6D8]/20 rounded-lg transition-all duration-200">
              <Link href={"/appointments"}>All Appointments</Link>
            </li>
            <li className="text-[#DDE6D8] font-bold">Dashboard</li>
            <li className="ml-4"><Link href={"/dashboard/my-bookings"}>My Bookings</Link></li>
            <li className="ml-4"><Link href={"/dashboard/my-profile"}>My Profile</Link></li>
            <li className="hover:bg-[#DDE6D8]/20 rounded-lg transition-all duration-200">
              <Link href={"/add-doctor"}>Add Doctor</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-[#DDE6D8]">
            <Image
              src="/assests/daily-health-app.png"
              alt="doc"
              height={32}
              width={32}
            />
          </div>
          <span className="text-2xl font-extrabold text-[#DDE6D8]">Docure</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 overflow-visible">{links}</ul>
      </div>

      

      <div className="navbar-end gap-2">
        {
        user ? <>
        <li><Avatar>
        <Avatar.Image alt="John Doe" src={user.image} />
        <Avatar.Fallback className="bg-[#DDE6D8] text-[#4A6B6F] font-bold">{user.name.charAt(0).toUpperCase()}</Avatar.Fallback>
      </Avatar></li>
        <li>
          <Button onClick={handleSignOut} className="bg-[#DDE6D8] text-[#4A6B6F] hover:bg-white border-none flex items-center gap-3 font-bold">logout <FiLogOut className="bg-[#4A6B6F] rounded-full p-2 text-[#DDE6D8] h-8 w-8" /></Button>
        </li>
        </>
       :
        <>
        <Link
          href={"/login"}
          className="btn btn-sm lg:btn-md bg-[#DDE6D8] text-[#4A6B6F] hover:bg-white border-none"
        >
          <span className="flex items-center gap-3">Login <RiLoginBoxLine className="bg-[#4A6B6F] rounded-full p-2 text-[#DDE6D8] h-8 w-8" /></span>
        </Link>

        <Link
          href={"/register"}
          className="btn btn-sm lg:btn-md bg-[#DDE6D8] text-[#4A6B6F] hover:bg-white border-none"
        >
          <span className="flex items-center gap-3">Register <GiArchiveRegister  className="bg-[#4A6B6F] rounded-full p-2 text-[#DDE6D8] h-8 w-8" /></span>
        </Link>
        </>}
      </div>
    </div>
  );
};

export default Navbar;
