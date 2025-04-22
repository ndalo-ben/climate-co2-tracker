'use client';

import { motion } from 'framer-motion';
import ChartSection from './components/ChartSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1e1e1e] text-white overflow-x-hidden">

      <section className="px-6 md:px-20 py-24">
        <motion.div
          className="max-w-3xl text-center mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Tracking Global CO₂ Emissions
          </h1>
          <p className="mt-4 text-[#9c9c9c] text-lg">
            Explore real data from 2000 to now using Our World In Data’s CO₂ emissions dataset.
          </p>
        </motion.div>
          <ChartSection />
      </section>

    </main>
  );
}
