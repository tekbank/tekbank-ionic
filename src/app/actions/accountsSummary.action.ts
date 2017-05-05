import { User, AccountsSummary, AccountDetails } from './../models';
import { Action } from '@ngrx/store';

export const LOAD = '[AccountsSummary] Load';
export const LOAD_SUCCESS = '[AccountsSummary] Load Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: AccountsSummary) { }
}

export type Actions
    = LoadAction  
    | LoadSuccessAction;