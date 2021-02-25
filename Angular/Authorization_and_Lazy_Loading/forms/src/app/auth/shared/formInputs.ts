import { Validators } from "@angular/forms";
import { fbObjects, Inputs } from "./intrfaces";
import { emailValidator, matchValues } from "./validationHandlers";
import { passwordRule } from "./validationPattern";

export const Authorization: Inputs[] = [
    { name: 'login', message: 'Login is required' },
    { name: 'password', message: 'Password should include digit, uppercase and lowercase letters and be more than 8 symbols', type: 'password' },
]

export const Registration: Inputs[] = [
    { name: 'name', message: 'Name should be longer than 2 symbols' },
    { name: 'login', message: 'Login is required' },
    { name: 'email', message: 'Invalid email' },
    { name: 'password', message: 'Should be: digit, upper- & lowercase letters and 8 symbols at least', type: 'password' },
    { name: 'confirm', message: 'Password is not the same', type: 'password', fieldName: 'password again' }
]

export const RegisterFormBuilderObject: fbObjects = {
    name: ['', [Validators.required, Validators.minLength(2)]],
    login: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRule)]],
    confirm: ['', [Validators.required, matchValues('password')]]
}

export const AuthFormBuilderObject: fbObjects = {
    login: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRule)]],
}


