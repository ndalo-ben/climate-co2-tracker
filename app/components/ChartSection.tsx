'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getCountryData, getCountryList } from '../lib/data';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import SummaryStats from './SummaryStats';

type DataPoint = {
  year: number;
  co2: number | null; // Allowing null here
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

export default function ChartSection() {
  const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string } | null>(
    { label: 'World', value: 'World' }
  );
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [countryList, setCountryList] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    const countries = getCountryList();
    console.log('Country List:', countries); // Log the country list to the terminal
    setCountryList(countries);
  }, []);

  useEffect(() => {
    // Fetch country data whenever the selected country changes
    async function fetchData() {
      if (selectedCountry?.value) {
        setLoading(true);
        const countryData = await getCountryData(selectedCountry.value);

        // Filter out entries where 'co2' is null
        const filteredData = countryData.filter(entry => entry.co2 !== null);

        // Now 'filteredData' should contain only valid DataPoint objects (with 'co2' as number)
        setData(filteredData); // Set the filtered data
        setLoading(false);
      }
    }
    fetchData();
  }, [selectedCountry]);

  return (
    <section className="w-full py-10 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">🌍 CO₂ Emissions Explorer</h2>

      <div className="mb-6 text-red-500">
        <Select
          defaultValue={selectedCountry}
          onChange={(val) => setSelectedCountry(val)}
          options={countryList}
          isSearchable
          classNamePrefix="react-select"
          styles={{
            control: (base, state) => ({
              ...base,
              backgroundColor: '#1e1e1e',
              borderColor: state.isFocused ? '#3F8E00' : '#333333',
              boxShadow: state.isFocused ? '0 0 0 1px #3F8E00' : 'none',
              '&:hover': {
                borderColor: '#3F8E00',
              },
              color: '#ffffff',
              minHeight: '48px',
            }),
            singleValue: (base) => ({
              ...base,
              color: '#ffffff',
            }),
            placeholder: (base) => ({
              ...base,
              color: '#9c9c9c',
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: '#1e1e1e', // Dark background
              color: '#ffffff', // Ensure text is white
              fontSize: '14px', // Explicit font size
              fontWeight: 'normal', // Explicit font weight
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? '#3F8E00' : '#1e1e1e', // Highlight on hover
              color: state.isFocused ? '#ffffff' : '#ffffff', // Ensure text is always white
              cursor: 'pointer',
              fontSize: '14px', // Explicit font size
              fontWeight: 'normal', // Explicit font weight
            }),
            input: (base) => ({
              ...base,
              color: '#fff',
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: '#9c9c9c',
              '&:hover': { color: '#ffffff' },
            }),
            indicatorSeparator: () => ({
              display: 'none',
            }),
            clearIndicator: (base) => ({
              ...base,
              color: '#9c9c9c',
              '&:hover': { color: '#ffffff' },
            }),
          }}
          className="text-blue-400 border border-[#333] rounded-lg shadow-md hover:shadow-lg transition duration-300"
        />
      </div>

      {loading ? (
        <div className="text-white text-center animate-pulse">Loading data...</div>
      ) : (
        <>
          <SummaryStats data={data} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">CO₂ Emissions Over Time</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" stroke="#ccc" />
                  <YAxis stroke="#ccc" unit="Mt" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#333', borderColor: '#3F8E00', color: '#fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="co2"
                    stroke="#3F8E00"
                    strokeWidth={2.5}
                    dot={{ r: 2 }}
                    activeDot={{ r: 5 }}
                    animationDuration={800}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">CO₂ Growth & Other Factors</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" stroke="#ccc" />
                  <YAxis stroke="#ccc" unit="Mt" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#333', borderColor: '#3F8E00', color: '#fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="co2_growth_abs"
                    stroke="#FF6347"
                    strokeWidth={2.5}
                    dot={{ r: 2 }}
                    activeDot={{ r: 5 }}
                    animationDuration={800}
                  />
                  <Line
                    type="monotone"
                    dataKey="co2_growth_prct"
                    stroke="#FF4500"
                    strokeWidth={2.5}
                    dot={{ r: 2 }}
                    activeDot={{ r: 5 }}
                    animationDuration={800}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
