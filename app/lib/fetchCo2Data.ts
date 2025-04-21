import data from '../data/owid-co2-data.json';
import { Co2Dataset } from '../types/co2';

export const fetchCo2Data = async (): Promise<Co2Dataset> => {
  return data as Co2Dataset;
};
