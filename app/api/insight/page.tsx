// app/insight/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function InsightPage() {
    const [insight, setInsight] = useState<string | null>(null);

    useEffect(() => {
        const messages = [
            '🚀 Fetching real-time CO₂ emissions...',
            '🌍 Analyzing global climate shifts...',
            '📊 Compiling emissions data for top offenders...',
            '☠️ Air quality levels critically rising...',
            '💡 Actionable insight unlocked.'
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < messages.length) {
                setInsight(messages[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen px-6 md:px-20 pt-32 max-w-7xl mx-auto pb-10 bg-[#0d0d0d] text-[#00ff9c] font-mono">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 animate-pulse">
                💻 Hacker Console: Climate CO₂ Insight
            </h1>

            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#00ff9c]/30">
                <div className="text-sm md:text-base leading-relaxed tracking-wide">
                    {insight ? (
                        <p className="transition-all duration-500 ease-in-out">{insight}</p>
                    ) : (
                        <p className="italic text-[#00ff9c]/70">Initializing system...</p>
                    )}
                </div>

                <div className="mt-10 text-[#ff0077]">
                    <p className="text-xs">🔐 Access Level: GREEN ZONE</p>
                    <p className="text-xs">🔎 Terminal ID: C02-INSIGHT-Δ-X</p>
                    <p className="text-xs">🌐 Uplink Secure</p>
                </div>
            </div>

            <footer className="mt-20 text-[#00ff9c]/60 text-xs">
                <p>🧠 Built by rebels, for the planet 🌿</p>
            </footer>
        </main>
    );
}
