'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="py-4 px-6 md:px-20 fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-green-700 flex justify-between items-center font-mono text-green-300">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                CO₂ Insight 🌍
            </h2>

            <nav className="flex gap-4 items-center text-sm md:text-base">
                <Link
                    href="/"
                    className={clsx(
                        "hover:text-green-400 transition-all duration-200",
                        pathname === "/" && "underline underline-offset-4 decoration-green-500"
                    )}
                >
                    Home
                </Link>
                <Link
                    href="/api-docs"
                    className={clsx(
                        "hover:text-green-400 transition-all duration-200",
                        pathname === "/api-docs" && "underline underline-offset-4 decoration-green-500"
                    )}
                >
                    API Documentation
                </Link>

                <Link
                    href="https://github.com/ndalo-ben/climate-co2-tracker.git"
                    target="_blank"
                    className="border border-green-500 px-3 py-1 rounded-md hover:bg-green-700/10 hover:scale-105 transition-all duration-300"
                >
                    ⭐ Star
                </Link>
            </nav>

            <style jsx>{`
                .animate-flicker {
                    animation: flicker 2s infinite alternate;
                }

                @keyframes flicker {
                    0%, 100% { opacity: 0.9; text-shadow: 0 0 2px #00ff00, 0 0 4px #00ff00; }
                    50% { opacity: 1; text-shadow: 0 0 4px #00ff00, 0 0 8px #00ff00; }
                }
            `}</style>
        </header>
    );
}
