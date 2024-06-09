import { Role } from 'src/app/Models/role.Model';

export interface User {
  id?: number;
  username: string;
  password: string;
  roles: Role[];
}
