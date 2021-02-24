import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  RegisterFormBuilderObject,
  Registration,
} from '../../additional/formInputs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  inputs = Registration;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group(RegisterFormBuilderObject);
  }

  save() {
    this.auth.saveRegisterForm().subscribe((value) => {
      console.log('SAVED: ', value);
    });
  }
}
