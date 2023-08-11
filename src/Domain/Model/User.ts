import Role from "./Role";

export class User {
  role!: Role;
  password!: string;
  username!: string;
  constructor(password: string, username: string, role: Role) {
    this.password = password;
    this.role = role;
    this.username = username;
  }
}
