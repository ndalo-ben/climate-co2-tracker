'use client';

import Link from "next/link";

export default function Header() {
    return (
        <header className="py-4 px-6 md:px-20 fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-[#0f0f0f]/70 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                CO₂ Insight 🌍
            </h2>

            <Link
                href={"https://github.com/ndalo-ben/climate-co2-tracker.git"}
                className="text-sm md:text-base font-medium bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text border border-amber-300 text-transparent px-4 py-2 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
                ⭐ Star Project
            </Link>
        </header>
    );
}
