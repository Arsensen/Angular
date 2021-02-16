import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import validator from 'validator'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  formData: FormGroup

  constructor(private registrationService: RegistrationService) { }

  matchValues( matchTo: string ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  emailValidator(): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return validator.isEmail(control.value) ? null : { isMatching: false}
    }
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required, this.emailValidator()]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])/)]),
      confirmedPassword: new FormControl(null, [Validators.required, this.matchValues('password')])
    })
  }

  signIn(): void {
    if(this.formData.status === 'VALID'){
      this.registrationService.signing(this.formData.value)
    }
  }
}
