import { FaGlobeAmericas, FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';

type DataPoint = {
  year: number;
  co2: number | null;
  co2_growth_abs: number | null;
  co2_growth_prct: number | null;
  co2_per_capita: number | null;
  co2_per_gdp: number | null;
  consumption_co2: number | null;
  consumption_co2_per_capita: number | null;
  cumulative_co2: number | null;
  cumulative_co2_per_capita: number | null;
  gdp: number | null;
  cement_co2: number | null;
  coal_co2: number | null;
  flaring_co2: number | null;
  gas_co2: number | null;
  oil_co2: number | null;
  other_industry_co2: number | null;
  population: number | null;
  primary_energy_consumption: number | null;
  share_global_co2: number | null;
  trade_co2: number | null;
  trade_co2_share: number | null;
  total_ghg_emissions: number | null;
  methane: number | null;
  methane_per_capita: number | null;
  nitrous_oxide: number | null;
  nitrous_oxide_per_capita: number | null;
  ghg_per_capita: number | null;
};

type Props = {
  data: DataPoint[];
};

const SummaryStats: React.FC<Props> = ({ data }) => {
  const latestData = data[data.length - 1];
  const totalCo2 = latestData.co2 || 0;
  const totalPopulation = latestData.population || 0;
  const co2PerCapita = totalPopulation ? totalCo2 / totalPopulation : 0;

  const stats = [
    {
      label: 'Total CO₂ Emissions',
      value: `${totalCo2.toFixed(2)} Mt`,
      icon: <FaGlobeAmericas className="text-green-400 text-2xl" />,
    },
    {
      label: 'CO₂ per Capita',
      value: `${co2PerCapita.toFixed(4)} Mt`,
      icon: <FaChartLine className="text-blue-400 text-2xl" />,
    },
    {
      label: 'Population',
      value: latestData.population?.toLocaleString() || 'N/A',
      icon: <FaUsers className="text-yellow-300 text-2xl" />,
    },
    {
      label: 'GDP',
      value: latestData.gdp ? `$${latestData.gdp.toLocaleString()}` : 'N/A',
      icon: <FaDollarSign className="text-purple-400 text-2xl" />,
    },
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-300 group"
        >
          <div className="flex items-center gap-4 mb-4">
            {stat.icon}
            <h3 className="text-sm text-gray-400 group-hover:text-white transition">
              {stat.label}
            </h3>
          </div>
          <p className="text-2xl font-semibold text-white group-hover:text-green-300 transition">
            {stat.value}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default SummaryStats;
