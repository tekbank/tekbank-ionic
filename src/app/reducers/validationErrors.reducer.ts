import * as validationErrors from '../actions/validationErrors.action';
import { ValidationErrors } from '../models';

export interface State {
    validationHandlers: ValidationHandler[];
};

const initialState: State = {
    validationHandlers: [] as ValidationHandler[]
}


// This is a untested validation reducer which takes a validationErrors object dispatched from an @Effect which needs to add the key to the validationErrors on the name of the related form.
// Spoke to Brendan about it and needs testing once we have the object returning from the server side. Not to be confused with a global error hadling reducer which has also been stubbed out.

export function reducer(state = initialState, action: validationErrors.Actions): State {
    switch (action.type) {
        case validationErrors.ADD_VALIDATION_ERRORS:
            return state = {
                validationHandlers: [...state.validationHandlers, new ValidationHandler(action.payload)]
            }
        case validationErrors.CLEAR_VALIDATION_ERRORS:
            return state = {
               validationHandlers: state.validationHandlers.filter(handler => action.payload !== handler.validationErrors.key)
            }
        default:
            return state;
    }
}

class ValidationHandler {
    key: string;
    constructor(public validationErrors: ValidationErrors) {
        this.key = validationErrors.key;
    }
    
    errorsFor(key: string): string[] {
        if (!this.validationErrors || !key) return [];
        var formattedError = this.validationErrors.formattedErrors.filter(function (i) { return i.key.toString().toLowerCase() == key.toString().toLowerCase() })[0];
        if (!formattedError) return [];
        else return formattedError.errors;
    }

    hasErrorFor(key: string): boolean {
        if (!this.validationErrors || !key) return false;
        var formattedError = this.validationErrors.formattedErrors.filter(function (i) { return i.key.toString().toLowerCase() == key.toString().toLowerCase() })[0];
        if (!formattedError) return false;
        else return true
    }

    hasErrorForAny(keys: string[]): boolean {
        for (var i = 0; i < keys.length; i++) {
            if (this.hasErrorFor(keys[i])) return true;
        }
        return false;
    }

    isValid(): boolean {
        if (!this.validationErrors) return true;
        else return this.validationErrors.isValid
    }


    clearErrorsFor(key: string) {
        if (this.validationErrors && this.validationErrors.formattedErrors) {
            var toDelete = this.validationErrors.formattedErrors.filter(i => i.key.toString().toLowerCase() == key.toString().toLowerCase());
            toDelete.forEach(e =>
                this.validationErrors.formattedErrors.splice(
                    this.validationErrors.formattedErrors.indexOf(e), 1
                )
            );
        }
    }

}