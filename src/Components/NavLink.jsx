'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();
    console.log(pathname);

    const isActive = href === pathname

    return (
        
            <Link href={href} className={`${className} ${isActive ? "text-white font-bold" : ""}`}>
            {children}
            </Link>
        
    );
};

export default NavLink;