import Role from "./Role";

export class User {
  private _roles: Role[];
  private _password: string;
  private _username: string;
  constructor(username: string, password: string, roles: Array<Role>) {
    this._username = username;
    this._password = password;
    this._roles = roles;
  }
  public get username(): string {
    return this._username;
  }

  public get password(): string {
    return this._password;
  }
  public get roles(): Role[] {
    return this._roles;
  }
}
