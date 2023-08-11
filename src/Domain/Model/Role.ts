import { TPermission } from "./Premission";

class Role {
  name!: TPermission;
  permissions!: string[];
  constructor(name: TPermission) {
    this.name = name;
    this.permissions = this.assignPermissions(name);
  }
  private assignPermissions(name: TPermission): string[] {
    if (name === "admin") {
      return ["permission1", "permission2", "permission3"];
    } else if (name === "user") {
      return ["permission1", "permission2"];
    } else {
      throw new Error(`Unknown RoleEntity: ${name}`);
    }
  }
}

export default Role;
