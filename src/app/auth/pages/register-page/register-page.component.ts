import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../api/auth.service';
import { User } from '../../models';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  public readonly formGroup: FormGroup;
  public readonly genders: string[] = Object.values(User.Gender);
  public readonly educationLevels: string[] = Object.values(
    User.EducationLevel
  );
  public readonly entryYears: string[] = User.ENTRY_YEARS;
  public readonly fieldsOfStudy: string[] = User.FIELDS_OF_STUDY;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService
  ) {
    this.formGroup = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      gender: [null, [Validators.required]],
      age: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      entry_year: [null, [Validators.required]],
      education_level: [null, [Validators.required]],
      field_of_study: [null, [Validators.required]],
    });
  }

  public handleRegister(): void {
    this._authService.register(this.formGroup.value);
  }
}
