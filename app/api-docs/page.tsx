'use client';


export default function ApiDocsPage() {
    return (
        <main className="min-h-screen bg-black text-green-400 font-mono p-6 max-w-7xl mx-auto py-24 tracking-wide overflow-x-hidden">
            {/* Header */}
            <section className="mb-10 animate-flicker">
                <pre className="text-green-500 text-lg md:text-xl leading-6">
                    {`███████╗██╗      █████╗ ██████╗ ███████╗
██╔════╝██║     ██╔══██╗██╔══██╗██╔════╝
███████╗██║     ███████║██║  ██║█████╗  
╚════██║██║     ██╔══██║██║  ██║██╔══╝  
███████║███████╗██║  ██║██████╔╝███████╗
╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝`}
                </pre>
                <h1 className="text-xl md:text-2xl mt-4">
                    Welcome to the <span className="text-green-300">Climate CO₂ API</span> <span className="animate-blink">_</span>
                </h1>
                <p className="text-green-300 mt-2"> Data for devs who code like rebels 🤖</p>
            </section>

            {/* Terminal-style content */}
            <section className="mb-12">
                <h2 className="text-2xl mb-2">🧭 Base URL</h2>
                <div className="bg-[#0d0d0d] p-4 rounded border border-green-500 shadow-inner shadow-green-700">
                    <code className="text-green-300">https://climate-co2-tracker.vercel.app/api</code>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl mb-2">📍 Get All Countries</h2>
                <div className="terminal-block">
                    <p className="prompt">&gt; GET /api/co2/countries</p>
                    <pre className="code-block">
                        {`[
  { "code": "ETH", "country": "Ethiopia" },
  { "code": "USA", "country": "United States" }
]`}
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl mb-2">📊 Get Country CO₂</h2>
                <div className="terminal-block">
                    <p className="prompt">&gt; GET /api/co2/[code]</p>
                    <p className="text-green-300">Replace [code] with country code (e.g. ETH)</p>
                    <pre className="code-block">
                        {`{
  "year": 2020,
  "co2": 0.78,
  "co2_per_capita": 0.02,
  "population": 50000000
}`}
                    </pre>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 border-t border-green-900 pt-4 text-sm text-center text-green-600">
                {"</>"} Stay green. Hack responsibly 🌍
            </footer>

            {/* Styles */}
            <style jsx>{`
        .prompt {
          background-color: #0d0d0d;
          color: #00ff00;
          padding: 0.5rem;
          border-left: 4px solid #00ff00;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .code-block {
          background-color: #111;
          color: #00ff00;
          padding: 1rem;
          border: 1px solid #00ff00;
          border-radius: 0.5rem;
          overflow-x: auto;
          font-size: 0.875rem;
        }

        .terminal-block {
          margin-top: 1rem;
        }

        .neon-text {
          text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
        }
      `}</style>
        </main>
    );
}
