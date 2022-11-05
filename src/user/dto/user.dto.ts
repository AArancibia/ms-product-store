export interface User {
  id: string;
  username: string;
  givenName: string;
  lastName: string;
  surname: string;
  telephone: string;
  complete: boolean;
  profiles: Array<Profile>;
  email: string;
}

export interface Profile {
  id: string;
  description: string;
  icon: any;
  url: string;
}
