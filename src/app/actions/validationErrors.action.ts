import { Action } from '@ngrx/store';
import { ValidationErrors } from '../models';

export const ADD_VALIDATION_ERRORS = '[ValidationErrors] Add Validation Errors';
export const CLEAR_VALIDATION_ERRORS = '[ValidationErrors] Clear Validation Errors';

export class AddValidationErrorsAction implements Action {
  readonly type = ADD_VALIDATION_ERRORS;
  constructor(public payload: ValidationErrors){}
}

export class ClearValidationErrorsAction implements Action {
  readonly type = CLEAR_VALIDATION_ERRORS;
  constructor(public payload: string){}
}

export type Actions
    = AddValidationErrorsAction  
    | ClearValidationErrorsAction;