import {Config, ConfigPropName} from './types';

const fallback = <T>(primary: T | undefined, defaultValue: T): T =>
  primary && `${primary}`.length > 0 ? primary : defaultValue;

const parseBoolEnv = (value: string | undefined) => {
  if (!value) {
    return false;
  }
  const normalized = value.trim().toLowerCase();
  return normalized === 'true' || normalized === '1' || normalized === 'yes';
};

export const DEFAULT_MAP_STYLE_LIGHT = fallback(
  process.env.NEXT_PUBLIC_MapboxMapStyle_Light,
  'mapbox://styles/mapbox/light-v11',
);
export const DEFAULT_MAP_STYLE_DARK = fallback(
  process.env.NEXT_PUBLIC_MapboxMapStyle_Dark,
  'mapbox://styles/mapbox/dark-v11',
);
export const DEFAULT_MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MapboxAccessToken;
export const IGNORE_SHEET_MAPBOX_STYLE = parseBoolEnv(
  process.env.NEXT_PUBLIC_IGNORE_SHEET_MAPBOX_STYLE,
);
export const DEFAULT_CONFIG: Config = {
  [ConfigPropName.MAPBOX_ACCESS_TOKEN]: DEFAULT_MAPBOX_ACCESS_TOKEN,
  'msg.locationTooltip.incoming': 'Incoming trips',
  'msg.locationTooltip.outgoing': 'Outgoing trips',
  'msg.locationTooltip.internal': 'Internal & round trips',
  'msg.flowTooltip.numOfTrips': 'Number of trips',
  'msg.totalCount.allTrips': '{0} trips',
  'msg.totalCount.countOfTrips': '{0} of {1} trips',
};

export function parseBoolConfigProp(value: string | undefined) {
  if (value != null) {
    const lower = value.toLowerCase();
    if (lower === 'yes' || lower === 'true' || lower === '1') return true;
  }
  return false;
}

export function parseNumberConfigProp(value: string | undefined, defaultValue: number) {
  if (value != null) {
    const numVal = +value;
    if (isFinite(numVal)) return numVal;
  }
  return defaultValue;
}
