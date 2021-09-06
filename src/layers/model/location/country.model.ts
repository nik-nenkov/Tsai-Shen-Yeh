import { CityModel } from './city.model';

export class CountryModel{
  name?: string;
  flag?: string;
  capital?: CityModel;
  majorCities?: CityModel[];
}
