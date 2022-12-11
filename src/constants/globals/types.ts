export interface IValueForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company_name: string;
  country: string;
  message: string;
}
export interface IValueFormErrors {
  firstName: string | boolean;
  lastName: string | boolean;
  email: string | boolean;
  phone: string | boolean;
  company_name: string | boolean;
  country: string | boolean;
  message: string | boolean;
}