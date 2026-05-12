"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-5 py-3 bg-white border-b border-gray-200 text-sm">

            {/* Left – nav links */}
            <ul className="hidden md:flex gap-6 text-gray-700">
                <li><Link href="/" className="text-[#0ca4b8] underline underline-offset-4">Home</Link></li>
                <li><Link href="/destinations" className="hover:text-[#0ca4b8] transition-colors">Destinations</Link></li>
                <li><Link href="/my-bookings" className="hover:text-[#0ca4b8] transition-colors">My Bookings</Link></li>
                <li><Link href="/add-destination" className="hover:text-[#0ca4b8] transition-colors">Add Destination</Link></li>
            </ul>

            {/* Center – logo (absolute on md+, static on mobile) */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                <Image
                    src="/assets/Wanderlast.png"
                    alt="Wanderlust Logo"
                    width={150}
                    height={50}
                />
            </div>

            {/* Right – auth links */}
            <ul className="hidden md:flex items-center gap-5 text-gray-700">
                <li>
                    <Link href="/profile" className="flex items-center gap-1 hover:text-[#0ca4b8] transition-colors">
                        <FiUser size={15} /> Profile
                    </Link>
                </li>
                <li><Link href="/login" className="hover:text-[#0ca4b8] transition-colors">Login</Link></li>
                <li>
                    <Link href="/signup" className="border border-gray-700 px-3 py-1 rounded hover:bg-gray-700 hover:text-white transition-colors">
                        Sign Up
                    </Link>
                </li>
            </ul>

            {/* Hamburger – mobile only */}
            <button
                className="md:hidden text-gray-700 ml-auto"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-md flex flex-col px-5 py-4 gap-4 z-50 md:hidden text-gray-700">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-[#0ca4b8]">Home</Link>
                    <Link href="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link>
                    <Link href="/my-bookings" onClick={() => setMenuOpen(false)}>My Bookings</Link>
                    <Link href="/add-destination" onClick={() => setMenuOpen(false)}>Add Destination</Link>
                    <hr className="border-gray-200" />
                    <Link href="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-1"><FiUser size={15} /> Profile</Link>
                    <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link href="/signup" onClick={() => setMenuOpen(false)} className="border border-gray-700 px-3 py-1 rounded w-fit">Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;