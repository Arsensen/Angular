import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  AuthFormBuilderObject,
  Authorization,
} from '../shared/formInputs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  inputs = Authorization;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group(AuthFormBuilderObject);
  }

  signIn() {
    if (this.form.valid) {
      this.auth.signIn(this.form.value).subscribe((value) => {
        console.log('SAVED: ', value);
      });
    }
  }
}
