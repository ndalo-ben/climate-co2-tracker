import rawData from '../data/owid-co2-data.json';
import { Co2DataPoint } from '../types/co2';

const data = rawData as Record<string, Co2DataPoint>;

export const getCountryList = () => {
  return Object.keys(data)
    .filter((key) => {
      const entry = data[key];
      return entry.country && Array.isArray(entry.data) && entry.data.length > 0;
    })
    .map((key) => ({
      label: data[key].country,
      value: key,
    }))
    .sort((a, b) => a.label.localeCompare(b.label)); // ✅ Sort alphabetically by country name
};
