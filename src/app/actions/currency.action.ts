import { CurrencyConversion, Currency , CurrencyConversionRequest} from './../models';
import { Action } from '@ngrx/store';

export const CONVERSION_RATE_LOAD = '[Currency] Load Conversion Rate';
export const CONVERSION_RATE_LOAD_SUCCESS = '[Currency] Load Conversion Rate Success';

export class ConversionRateLoad implements Action {
  readonly type = CONVERSION_RATE_LOAD_SUCCESS;
  constructor(public payload: CurrencyConversionRequest) { }
}
export class ConversionRateLoadSuccessAction implements Action {
  readonly type = CONVERSION_RATE_LOAD_SUCCESS;
  constructor(public payload: CurrencyConversion) { }
}

export type Actions
  = ConversionRateLoadSuccessAction
