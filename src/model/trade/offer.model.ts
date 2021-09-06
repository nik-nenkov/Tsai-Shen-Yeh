import { ProductModel } from './product.model';

export class OfferModel{
  product?: ProductModel;
  quantity?: number;
  price?: number;
  expires?: string;
  published?: string;
}
