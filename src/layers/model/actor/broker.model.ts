import { CompanyModel } from './company.model';
import { OfferModel } from '../trade/offer.model';

export class BrokerModel{
  id?: string;
  name?: string;
  phone?: string;
  company?: CompanyModel;
  offers?: OfferModel[];
}
