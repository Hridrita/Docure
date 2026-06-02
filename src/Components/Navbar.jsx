"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {data:session} = authClient.useSession()
  console.log(session);
  
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const links = (
    <>
      <Link
        href={"/"}
        className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/") ? "text-white font-bold" : "text-[#DDE6D8]"}`}
      >
        Home
      </Link>
      <Link
        href={"/appointments"}
        className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/appointments") ? "text-white font-bold" : "text-[#DDE6D8]"}`}
      >
        All Appointments
      </Link>
      <Link
        href={"/dashboard"}
        className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/dashboard") ? "text-white font-bold" : "text-[#DDE6D8]"}`}
      >
        Dashboard
      </Link>
      <Link
        href={"/add-doctor"}
        className={`text-[#DDE6D8] hover:text-white transition-colors text-base ${isActive("/add-doctor") ? "text-white font-bold" : "text-[#DDE6D8]"}`}
      >
        Add Doctor
      </Link>
    </>
  );

  return (
    <div className="navbar !bg-[#4A6B6F] shadow-sm px-4 lg:px-10">
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
            <li className="hover:bg-[#DDE6D8]/20 rounded-lg transition-all duration-200">
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
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
        <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
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
      </div>
    </div>
  );
};

export default Navbar;
