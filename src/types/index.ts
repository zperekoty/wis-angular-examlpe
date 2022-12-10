export interface IRequest {
  name: string;
  user: string;
  email: string;
  phone: string;
  message: string;
}

export interface IResponse {
  message: string;
  status?: string;
}

export interface IError {
  name: boolean;
  telegram: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}
