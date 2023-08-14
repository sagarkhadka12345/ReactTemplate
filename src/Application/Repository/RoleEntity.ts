import { TPermission } from "../../Domain/Model/Premission";
import Role from "../../Domain/Model/Role";

class RoleEntity extends Role {
  permissions!: string[];

  constructor(name: TPermission) {
    super(name);
  }

  getName(): string {
    return this.name;
  }

  getPermissions(): string[] {
    return this.permissions;
  }
  toJSON(): Record<string, string | Array<string>> {
    return {
      name: this.getName(),
      permissions: this.getPermissions(),

      // Serialize other properties as needed
    };
  }
}

export default RoleEntity;
