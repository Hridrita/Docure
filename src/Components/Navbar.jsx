import Image from 'next/image';
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
    const links = (
        <>
            <NavLink href={"/"} className="text-[#DDE6D8] hover:text-white transition-colors text-base">
                Home
            </NavLink>
            <NavLink href={"/appointments"} className="text-[#DDE6D8] hover:text-white transition-colors text-base ">
                All Appointments
            </NavLink>
            <NavLink href={"/dashboard"} className="text-[#DDE6D8] hover:text-white transition-colors text-base ">
                Dashboard
            </NavLink>
        </>
    );

    return (
        
        <div className="navbar !bg-[#4A6B6F] shadow-sm px-4 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-[#DDE6D8]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#4A6B6F] rounded-box z-[10] mt-3 w-52 p-2 shadow text-[#DDE6D8]">
                        {links}
                    </ul>
                </div>
                
                <div className='flex items-center gap-2'>
                    
                    <div className="text-[#DDE6D8]">
                        <Image src="/assests/daily-health-app.png" alt='doc' height={32} width={32} />
                    </div>
                    <span className="text-2xl font-extrabold text-[#DDE6D8]">
                        Docure
                    </span>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                
                <Link href={'/'} className="btn btn-sm lg:btn-md bg-[#DDE6D8] text-[#4A6B6F] hover:bg-white border-none">
                    Login
                </Link>

                <Link href={'/'} className="btn btn-sm lg:btn-md bg-[#DDE6D8] text-[#4A6B6F] hover:bg-white border-none">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;