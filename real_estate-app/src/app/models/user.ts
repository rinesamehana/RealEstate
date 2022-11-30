import { Rezervimi } from "./Rezervimi";


export interface User {
  id?: string;
  username: string;
  displayName: string;
  token: string;
  image?: string;
  rezervimet?: Rezervimi[] ;
  roles: string[];
}

export interface UserFormValues {
  email: string;
  password: string;
  displayName?: string;
  username?: string;
}
