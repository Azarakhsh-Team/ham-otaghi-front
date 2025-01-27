export namespace User {
  export interface Model {
    id: number;
    photo: null;
    bio: string;
    username: string;
    first_name: string;
    last_name: string;
    created_at: Date;
    gender: string;
    age: number;
    country: string;
    city: string;
    entry_year: string;
    education_level: string;
    field_of_study: string;
  }

  export interface GetUserResponse {
    data: Model;
  }
}
