import rawData from '../data/owid-co2-data.json';
import { Co2DataPoint } from '../types/co2';

const data = rawData as Record<string, Co2DataPoint>;

// Get CO2 data for a specific country code
export function getCountryData(code: string) {
    const country = data[code];

    if (!country || !country.data) return [];

    return country.data
        .filter((entry) => entry.co2 !== null && typeof entry.co2 === 'number')
        .map((entry) => ({
            year: entry.year,
            co2: entry.co2,
        }));
}
