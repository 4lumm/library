export interface Letter {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  romanNumeral: string;
}

export interface User {
  username: string;
  password: string;
  role: 'admin' | 'viewer';
}