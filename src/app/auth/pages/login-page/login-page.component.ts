import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public readonly formGroup: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService
  ) {
    this.formGroup = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public handleLogin(): void {
    this._authService.login(this.formGroup.value);
  }
}
