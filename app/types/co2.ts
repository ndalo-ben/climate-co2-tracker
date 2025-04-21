export type Co2Entry = {
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
    cement_co2_per_capita: number | null;
    coal_co2: number | null;
    coal_co2_per_capita: number | null;
    flaring_co2: number | null;
    flaring_co2_per_capita: number | null;
    gas_co2: number | null;
    gas_co2_per_capita: number | null;
    oil_co2: number | null;
    oil_co2_per_capita: number | null;
    other_industry_co2: number | null;
    other_co2_per_capita: number | null;
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

export type Co2DataPoint = {
    country: string;       
    iso_code: string;     
    data: Co2Entry[];      
};

export type Co2Dataset = {
    [countryCode: string]: Co2DataPoint; 
};
