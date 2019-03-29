import {Concurrences} from './concurrences.models';
import {Investments, Provision} from './finances.models';
import {Products} from './products.models';
import {Monetize} from './monetize.models';

interface Startup {
  uid: string;
  idea: string;
  objective: string;
  market: string;
  monetize: Monetize[];
  concurrences: Concurrences[];
  investments: Investments[];
  provision: Provision[];
  products: Products[];
  user_id: string;
}

function builderStartup(): Startup {
  return {
    uid: '',
    idea: '',
    objective: '',
    market: '',
    monetize: [],
    provision: [],
    investments: [],
    products: [],
    concurrences: [],
    user_id: ''
  };
}

export {Startup, builderStartup};
