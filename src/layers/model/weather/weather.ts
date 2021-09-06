export interface Weather{
  locationId: string;
  longitude: string;
  latitude: string;
  humidity: string;
  temperature: string;
  tempScale: 'K' | 'C';
  date: Date;
  windSpeed: string;
}
