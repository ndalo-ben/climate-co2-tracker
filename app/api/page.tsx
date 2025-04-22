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
    "Available Endpoints:"
];

const endpointLinks = [
    { path: "/api/co2/countries", label: "List all countries" },
    { path: "/api/co2/KEN", label: "Get CO₂ data for a specific country (e.g., KEN)" },
    { path: "/api/co2/KEN/latest", label: "Get latest CO₂ data for a specific country (e.g., KEN)" },
    { path: "/api/insight", label: "Get global CO₂ insight" },
    { path: "/api-docs", label: "Full API Documentation" }
  ];
  

const footerLines = [
    "",
    "✨ Built with TypeScript, powered by Open Data.",
    "🔗 GitHub: https://github.com/ndalo-ben/climate-co2-tracker"
];

export default function ApiHome() {
    const [linesToShow, setLinesToShow] = useState<number>(0);

    useEffect(() => {
        const totalLines = terminalLines.length + endpointLinks.length + footerLines.length;
        const interval = setInterval(() => {
            setLinesToShow((prev) => {
                if (prev < totalLines) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
            <div className="max-w-4xl mx-auto text-sm md:text-base w-full">
                {terminalLines.slice(0, linesToShow).map((line, index) => (
                    <pre key={index} className="whitespace-pre-wrap leading-relaxed">{line}</pre>
                ))}

                {linesToShow > terminalLines.length && (
                    <>
                        {endpointLinks.map((endpoint, i) => {
                            const showIndex = terminalLines.length + i;
                            return (
                                linesToShow > showIndex && (
                                    <pre key={endpoint.path} className="leading-relaxed">
                                        <Link
                                            href={endpoint.path}
                                            className="text-green-300 underline hover:text-green-500 transition-all"
                                        >
                                            ▸ {endpoint.path}
                                        </Link>
                                        {"  → " + endpoint.label}
                                    </pre>
                                )
                            );
                        })}
                    </>
                )}

                {linesToShow > terminalLines.length + endpointLinks.length &&
                    footerLines.map((line, index) => (
                        <pre key={index} className="whitespace-pre-wrap leading-relaxed">
                            {line.includes("https") ? (
                                <a
                                    href="https://github.com/ndalo-ben/climate-co2-tracker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-300 underline hover:text-green-500"
                                >
                                    {line}
                                </a>
                            ) : (
                                line
                            )}
                        </pre>
                    ))}
            </div>
        </div>
    );
}
