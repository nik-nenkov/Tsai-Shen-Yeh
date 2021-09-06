import { TransportationType } from './transportation-type';

export interface TransportationOption{
  departure: string;
  arrival: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: number;
  type: TransportationType
}
