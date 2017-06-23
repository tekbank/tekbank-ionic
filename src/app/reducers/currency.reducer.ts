import * as currency from '../actions/currency.action';
import { CurrencyConversion } from './../models';
import { Observable } from 'rxjs/Observable';

export interface State {
  currentConversionRate: CurrencyConversion
};

const initialState: State = {
  currentConversionRate: null
}

export function reducer(state = initialState, action: currency.Actions): State {
  switch (action.type) {
    case currency.CONVERSION_RATE_LOAD_SUCCESS:
      console.log('currency converstion rate load success');
      return {
        ...state,
        currentConversionRate: action.payload as CurrencyConversion
      };

    default:
      return state;
  }
}

export const getConversionRate = (state: State) => state.currentConversionRate;
