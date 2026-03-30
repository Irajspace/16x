"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Contests", href: "/contests" },
    { name: "Discuss", href: "/discuss" },
]

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="text-white text-xl font-bold">
                    16x
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm transition ${pathname === item.href
                                ? "text-white font-semibold"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {session ? (
                        <div className="flex items-center gap-3">

                            {/* Avatar */}
                            <img
                                src={session.user?.image || ""}
                                className="w-8 h-8 rounded-full"
                            />

                            {/* Name */}
                            <span className="text-white text-sm hidden sm:block">
                                {session.user?.name}
                            </span>

                            {/* Logout */}
                            <button
                                onClick={() => signOut()}
                                className="cursor-pointer px-3 py-1 text-sm bg-white/10 rounded text-black"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => signIn("google")}
                            className="cursor-pointer px-4 py-2 text-sm bg-white text-black rounded"
                        >
                            Sign In
                        </button>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-black/90">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-300"
                            onClick={() => setOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}