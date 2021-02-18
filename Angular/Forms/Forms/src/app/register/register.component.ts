import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Registration, RegisterFormBuilderObject } from './../formInputs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {
  form: FormGroup
  inputs = Registration

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(RegisterFormBuilderObject)

    for(let input of this.inputs){
      this.form.controls[input.name].valueChanges.pipe(
        debounceTime(1500),
        distinctUntilChanged(),
      ).subscribe((value)=>{
        this.form.reset({})
        console.log(value)
      })
    }
  }
}

