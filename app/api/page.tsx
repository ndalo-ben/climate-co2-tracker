// app/api/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const terminalLines = [
    "👾 CO₂ Insight API v1.0 initializing...",
    "🛰️ Establishing satellite uplink...",
    "✅ Uplink established.",
    "🌍 Tracking global CO₂ data...",
    "📡 Endpoint access granted.",
    "",
    "Available Endpoints:",
    "   ▸ /api/co2/countries              → List all countries",
    "   ▸ /api/c02/countries/[code]      → Get CO₂ data for a specific country",
    "   ▸ /api/insight                → Get global CO₂ insight",
    "   ▸ /api-docs                   → Full API Documentation",
    "",
    "✨ Built with TypeScript, powered by Open Data.",
    "🔗 GitHub: https://github.com/ndalo-ben/climate-co2-tracker",
];

export default function ApiHome() {
    const [linesToShow, setLinesToShow] = useState<string[]>([]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setLinesToShow((prev) => [...prev, terminalLines[i]]);
            i++;
            if (i >= terminalLines.length) clearInterval(interval);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className= "bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center p-6 md:p-12" >
        <div className="max-w-4xl mx-auto text-sm md:text-base" >
        {
            linesToShow.map((line, index) => (
                <pre key= { index } className = "whitespace-pre-wrap leading-relaxed" >
                { line }
                </pre>
            ))
        }
    {
        linesToShow.length === terminalLines.length && (
            <div className="mt-8 text-green-300" >
                <Link
              href="/api-docs"
        className = "underline hover:text-green-500 transition-all"
            >
              → Dive into the Docs
            </Link>
            </div>
        )
    }
    </div>
        </div>
  );
}
