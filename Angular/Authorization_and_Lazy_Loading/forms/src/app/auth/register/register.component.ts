import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  RegisterFormBuilderObject,
  Registration,
} from '../shared/formInputs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  inputs = Registration;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group(RegisterFormBuilderObject);
  }

  signUp() {
    if (this.form.valid) {
      this.auth.signUp(this.form.value).subscribe((value) => {
        console.log('SAVED: ', value);
      });
    }
  }
}
