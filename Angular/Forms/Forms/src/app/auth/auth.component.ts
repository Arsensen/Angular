import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Authorization, AuthFormBuilderObject } from './../formInputs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  form: FormGroup
  inputs = Authorization

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(AuthFormBuilderObject)
    
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
