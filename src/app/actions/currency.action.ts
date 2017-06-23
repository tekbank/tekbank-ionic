import { CurrencyConversion, Currency , CurrencyConversionRequest} from './../models';
import { Action } from '@ngrx/store';

export const CONVERSION_RATE_LOAD = '[Currency] Load Conversion Rate';
export const CONVERSION_RATE_LOAD_SUCCESS = '[Currency] Load Conversion Rate Success';

export class EmptyAction implements Action {
  readonly type = "empty";
  constructor(public payload: string) { }
}
export class ConversionRateLoadAction implements Action {
  readonly type = CONVERSION_RATE_LOAD;
  constructor(public payload: CurrencyConversionRequest) { }
}
export class ConversionRateLoadSuccessAction implements Action {
  readonly type = CONVERSION_RATE_LOAD_SUCCESS;
  constructor(public payload: CurrencyConversion) { }
}

export type Actions
  = ConversionRateLoadAction
  | ConversionRateLoadSuccessAction
 | EmptyAction
