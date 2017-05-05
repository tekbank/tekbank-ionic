import { Action } from '@ngrx/store';
import { Error } from '../models';

export const LOAD_ERRORS = '[ErrorHandler] Load Errors';
export const CLEAR_ERRORS = '[ErrorHandler] Clear Errors';

export class LoadErrorsAction implements Action {
  readonly type = LOAD_ERRORS;
  constructor(public payload: Error){}
}

export class ClearErrorsAction implements Action {
  readonly type = CLEAR_ERRORS;
}

export type Actions
    = LoadErrorsAction  
    | ClearErrorsAction;