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


    this.form.valueChanges.pipe(
      debounceTime(1500),
      distinctUntilChanged((prev, current)=>JSON.stringify(prev) === JSON.stringify(current))
    ).subscribe(()=>{
      this.form.reset({})
    })
  }

  identify(index, item){
    return item.name
  }
}

