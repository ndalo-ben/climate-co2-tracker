import rawData from '../data/owid-co2-data.json';

interface CountryDataEntry {
    country: string;
    data: { year: number }[];
}

const data = rawData as Record<string, CountryDataEntry>;

export const countries = Object.keys(data)
    .filter((key) => {
        const entry = data[key];
        return entry?.country && entry.data && entry.data.length > 0 && key.length === 3; // ISO 3 country codes
    })
    .map((key) => ({
        label: data[key].country,
        value: key,
    }));
