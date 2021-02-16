import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import validator from 'validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {
  formData: FormGroup

  constructor(private registrationService: RegistrationService) { }

  emailValidator(): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return validator.isEmail(control.value) ? null : { isMatching: false}
    }
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, this.emailValidator()]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])/)]),
    })
  }

  submit(): void {
    if(this.formData.status === 'VALID'){
      this.registrationService.saveForm(this.formData.value)
    }
  }
}

