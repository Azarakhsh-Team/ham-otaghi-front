import { User } from './user.model';

export namespace Auth {
  export interface LoginDto {
    email: string;
    password: string;
  }

  export interface LoginResponse {
    access: string;
    refresh: string;
  }

  export interface RegisterDto {
    email: string;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
    gender: User.Gender;
    age: number;
    country: string;
    city: string;
    entry_year: string;
    education_level: User.EducationLevel;
    field_of_study: string;
  }

  export type RegisterResponse = RegisterDto;
}
