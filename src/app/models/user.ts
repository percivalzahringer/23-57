export interface User {
  id: number;
  name: string | null;
  act: string | null;
  token?: string;
  password: string;
  login: string;

}
