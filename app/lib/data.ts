import rawData from '../data/owid-co2-data.json';
import { Co2DataPoint, Co2Dataset } from '../types/co2';

// Transform the raw JSON into a typed dataset with 'country' field added
const transformedData: Co2Dataset = Object.fromEntries(
    Object.entries(rawData).map(([country, value]) => {
        const { iso_code, data } = value as Omit<Co2DataPoint, 'country'>;

        return [
            country,
            {
                country, // Inject the country name
                iso_code,
                data,
            } satisfies Co2DataPoint,
        ];
    })
);

// Typed data export
export const data: Co2Dataset = transformedData;

// Function to fetch CO2 data by country code
export const getCountryData = (code: string) => {
    const country = data[code];

    if (!country || !country.data) return [];

    return country.data
        .filter((entry) => entry.co2 !== null && typeof entry.co2 === 'number');
};

// Function to get a list of countries
export const getCountryList = () => {
    return Object.entries(data).map(([code, details]) => ({
        label: details.country || code,
        value: code,
    }));
};
