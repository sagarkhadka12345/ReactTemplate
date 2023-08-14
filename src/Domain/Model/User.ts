import RoleEntity from "../../Application/Repository/RoleEntity";
import Role from "./Role";

export class User {
  role!: RoleEntity;
  password!: string;
  username!: string;
  constructor(password: string, username: string, role: RoleEntity) {
    this.password = password;
    this.role = role;
    this.username = username;
  }
}
