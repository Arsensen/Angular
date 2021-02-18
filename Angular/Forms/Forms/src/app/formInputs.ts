import { Validators } from "@angular/forms";
import { fbObjects, Inputs } from "./intrfaces";
import { emailValidator, matchValues } from "./validationHandlers";
import { UpperLowerDigit } from "./validationPattern";

export const Authorization: Inputs[] = [
    {name: 'email', message: 'Invalid email'},
    {name: 'password', message: 'Password should include digit, uppercase and lowercase letters and more than 8 symbols', type: 'password'},
    {name: 'confirm', message: 'Password is not the same', type: 'password', fieldName: 'confirm password'}
]

export const Registration: Inputs[] = [
    {name: 'name', message: 'Name should be longer than 2 symbols'},
    {name: 'surname', message: 'Surname should be longer than 2 symbols'},
    {name: 'login', message: 'Login is required'},
    {name: 'email', message: 'Invalid email'},
    {name: 'password', message: 'Password should include digit, uppercase and lowercase letters and more than 8 symbols', type: 'password'},
]

export const RegisterFormBuilderObject: fbObjects = {
    name: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    login: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(UpperLowerDigit)]]
}

export const AuthFormBuilderObject: fbObjects = {
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(UpperLowerDigit)]],
    confirm: ['', [Validators.required, matchValues('password')]]
}


