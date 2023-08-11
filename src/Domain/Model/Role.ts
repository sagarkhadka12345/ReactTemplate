
class Role {
  private id: string;
  private name: string;
  private permissions: string[];

  constructor(id: string, name: string, permissions: string[]) {
    this.id = id;
    this.name = name;
    this.permissions = permissions;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPermissions(): string[] {
    return this.permissions;
  }

  
}

export default Role;
