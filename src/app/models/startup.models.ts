import {Concurrences} from './concurrences.models';
import {Investments, Provision} from './finances.models';
import {Products} from './products.models';
import {Monetize} from './monetize.models';

export interface Startup {
  uid: string;
  idea: string;
  objective: string;
  market: string;
  monetize: Monetize[];
  concurrences: Concurrences[];
  investments: Investments[];
  provision: Provision[];
  products: Products[];
}
