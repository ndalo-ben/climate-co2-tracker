import { Co2Dataset } from '../types/co2';

type FilterType = 'country' | 'region';

type FilteredEntry = {
  label: string;
  value: string;
};

/**
 * Filters CO2 dataset by type (country or region)
 * @param dataset - Full CO2 dataset (Co2Dataset)
 * @param type - 'country' or 'region'
 * @returns List of filtered entries with labels and ISO codes
 */
export function filterCo2DataByType(
  dataset: Co2Dataset,
  type: FilterType
): FilteredEntry[] {
  const regionCodes = ['OWID_WRL', 'OWID_EUN', 'OWID_ASI', 'OWID_AFR', 'OWID_EUR', 'OWID_NAM', 'OWID_OCE', 'OWID_SAM']; // can be extended

  const isRegion = (code: string) => regionCodes.includes(code);

  return Object.entries(dataset)
    .filter(([code, entry]) => {
      const hasData = entry?.data?.length > 0;
      const isTargetType = type === 'region' ? isRegion(code) : !isRegion(code);
      return hasData && entry?.country && isTargetType;
    })
    .map(([code, entry]) => ({
      label: entry.country,
      value: code,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}
