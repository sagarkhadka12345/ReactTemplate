import { User } from "../../../../Domain/Model/User";
import RoleEntity from "./RoleEntity";

export class UserEntity extends User {
  constructor(username: string, password: string, role: RoleEntity) {
    super(password, username, role);
  }

  public getUsername(): string {
    return this.username;
  }

  public getPassword(): string {
    return this.password;
  }
  public getRoleEntity(): RoleEntity {
    return this.role;
  }
  toJSON(): Record<
    "username" | "password" | "RoleEntity",
    string | Record<string, string | Array<string>>
  > {
    return {
      username: this.getUsername(),
      password: this.getPassword(),
      role: this.getRoleEntity.toJSON(),
      // Serialize other properties as needed
    };
  }

  // Create an instance from JSON
  static fromJSON(json: User): User {
    return new User(json.username, json.password, json.role);
  }
}
