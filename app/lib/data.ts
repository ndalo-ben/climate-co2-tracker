import rawData from '../data/owid-co2-data.json';
import { Co2DataPoint } from '../types/co2';

const data = rawData as Record<string, Co2DataPoint>;

// Function to fetch CO2 data by country code
export const getCountryData = (code: string) => {
    const country = data[code];

    if (!country || !country.data) return [];

    return country.data
        .map((entry) => ({
            year: entry.year,
            co2: entry.co2,
            co2_growth_abs: entry.co2_growth_abs,
            co2_growth_prct: entry.co2_growth_prct,
            co2_per_capita: entry.co2_per_capita,
            co2_per_gdp: entry.co2_per_gdp,
            consumption_co2: entry.consumption_co2,
            consumption_co2_per_capita: entry.consumption_co2_per_capita,
            cumulative_co2: entry.cumulative_co2,
            cumulative_co2_per_capita: entry.cumulative_co2_per_capita,
            gdp: entry.gdp,
            cement_co2: entry.cement_co2,
            coal_co2: entry.coal_co2,
            flaring_co2: entry.flaring_co2,
            gas_co2: entry.gas_co2,
            oil_co2: entry.oil_co2,
            other_industry_co2: entry.other_industry_co2,
            population: entry.population,
            primary_energy_consumption: entry.primary_energy_consumption,
            share_global_co2: entry.share_global_co2,
            trade_co2: entry.trade_co2,
            trade_co2_share: entry.trade_co2_share,
            total_ghg_emissions: entry.total_ghg_emissions,
            methane: entry.methane,
            methane_per_capita: entry.methane_per_capita,
            nitrous_oxide: entry.nitrous_oxide,
            nitrous_oxide_per_capita: entry.nitrous_oxide_per_capita,
            ghg_per_capita: entry.ghg_per_capita,
        }))
        .filter((entry) => entry.co2 !== null && typeof entry.co2 === 'number');
};

// Function to get a list of countries
export const getCountryList = () => {
    return Object.keys(data).map((code) => ({
        label: data[code]?.country || code, // Ensure label is populated, fallback to code if undefined
        value: code,
    }));
};
