export namespace User {
  export interface Model {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    gender: Gender;
    age: number;
    country: string;
    city: string;
    entry_year: string;
    education_level: EducationLevel;
    field_of_study: string;
  }

  export enum Gender {
    male = 'male',
    female = 'female',
  }

  export enum EducationLevel {
    bachelor = 'bachelor',
    master = 'master',
    phd = 'phd',
  }

  export const ENTRY_YEARS: string[] = [
    '1403',
    '1402',
    '1401',
    '1400',
    '1399',
    '1398',
    '1397',
    '1396',
    '1395',
  ];

  export const FIELDS_OF_STUDY: string[] = [
    'مهندسی اپتیک و لیزر',
    'مهندسی انرژی',
    'مهندسی ایمنی و بازرسی‌فنی',
    'مهندسی برق',
    'مهندسی بهداشت حرفه‌ای و ایمنی کار',
    'مهندسی ایمنی‌صنعتی',
    'مهندسی بهره‌برداری راه‌آهن',
    'مهندسی پزشکی',
    'مهندسی پلیمر',
    'مهندسی حمل‌ونقل ریلی',
    'مهندسی خط و سازه‌های ریلی',
    'مهندسی دریا',
    'مهندسی راه‌آهن',
    'مهندسی ساخت‌وتولید',
    'مهندسی شهرسازی',
    'مهندسی شیمی',
    'مهندسی صنایع',
    'مهندسی صنایع غذایی',
    'مهندسی صنایع و سیستم‌های مدیریت',
    'مهندسی عمران',
    'مهندسی کامپیوتر',
    'مهندسی کشتی (موتور)',
    'مهندسی ماشین‌آلات دریایی',
    'مهندسی ماشین‌های ریلی',
    'مهندسی ماشین‌های صنایع غذایی',
    'مهندسی معدن',
    'مهندسی معماری',
    'مهندسی مکانیزاسیون کشاورزی',
    'مهندسی مکانیک بیوسیستم (کشاورزی)',
    'مهندسی مواد (متالوژی)',
    'مهندسی نساجی',
    'مهندسی نفت',
    'مهندسی نقشه‌برداری',
    'مهندسی هوافضا',
  ];
}
