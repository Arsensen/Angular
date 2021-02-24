import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  AuthFormBuilderObject,
  Authorization,
} from '../../additional/formInputs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  inputs = Authorization;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(AuthFormBuilderObject);

    /* this.form.valueChanges.pipe(
      debounceTime(4500),
      distinctUntilChanged((prev, current)=>JSON.stringify(prev) === JSON.stringify(current))
    ).subscribe((value)=>{
      this.form.reset({})
      console.log(value)
    }) */
  }
}
