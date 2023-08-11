import RoleEntity from "../../Application/DataSource/API/Entity/RoleEntity";
import { User } from "../../Domain/Model/User";
import { IAuthInterface } from "../../Domain/Repository/IAuthRepository";

class AuthRepository implements IAuthInterface {
  async authenticate(username: string, password: string): Promise<User | null> {
    // Simulated authentication logic
    if (username === "user" && password === "password") {
      // Assuming User class is defined in domain/models/User.ts
      const user = new User("user_id", "user", new RoleEntity("user"));
      return user;
    }
    return null; // Return null for failed authentication
  }
}

export default AuthRepository;
