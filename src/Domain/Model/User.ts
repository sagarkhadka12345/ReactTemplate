import Role from "./Role";
export class User {
  private _role!: Role;
  private _password!: string;
  private _username!: string;
  constructor(username: string, password: string, role: Role) {
    this._password = password;
    this._role = role;
    this._username = username;
    console.log("Initialization");
  }

  public getUsername(): string {
    return this._username;
  }

  public getPassword(): string {
    return this._password;
  }
  public getRoleEntity(): Role {
    return this._role;
  }
  toJSON(): Record<
    "username" | "password" | "role",
    string | Record<string, string | string[]>
  > {
    return {
      username: this.getUsername(),
      password: this.getPassword(),
      role: this.getRoleEntity().toJSON(),
    };
  }

  static fromJSON(json: User): User {
    return new User(json._username, json._password, json._role);
  }
}
