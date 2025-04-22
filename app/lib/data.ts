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

// Create a mapping of ISO codes to country names
const isoCodeToCountry = Object.fromEntries(
    Object.entries(rawData).map(([country, value]) => {
        const { iso_code } = value as Omit<Co2DataPoint, 'country'>;
        return [iso_code, country];
    })
);

// Typed data export
export const data: Co2Dataset = transformedData;
export const isoCodeMap = isoCodeToCountry;

// Function to fetch CO2 data by country code
export const getCountryData = (code: string) => {
    const normalizedCode = code.toUpperCase();
    const countryName = normalizedCode === 'WORLD' ? 'World' : isoCodeMap[normalizedCode];

    if (!countryName) {
        console.warn(`No country found for ISO code: ${normalizedCode}`);
        return [];
    }

    const country = data[countryName];

    if (!country || !country.data) {
        console.warn(`No data found for country: ${countryName}`);
        return [];
    }

    return country.data.filter(
        (entry) => entry.co2 !== null && typeof entry.co2 === 'number'
    );
};

// Function to get a list of countries
export const getCountryList = () => {
    return Object.entries(data).map(([code, details]) => ({
        label: details.country || code, // Use the country name or fallback to the code
        value: details.iso_code || code, // Use the ISO code or fallback to the code
    }));
};
