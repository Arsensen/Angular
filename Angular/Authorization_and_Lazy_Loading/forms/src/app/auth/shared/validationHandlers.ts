import { AbstractControl, ValidationErrors } from "@angular/forms";
import validator from 'validator'

export function matchValues( matchTo: string ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
        return !!control.parent &&
            !!control.parent.value &&
            control.value === control.parent.controls[matchTo].value
            ? null
            : { isMatching: false };
    };
}

export function emailValidator(): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
        return validator.isEmail(control.value || '') ? null : { isMatching: false}
    }
}