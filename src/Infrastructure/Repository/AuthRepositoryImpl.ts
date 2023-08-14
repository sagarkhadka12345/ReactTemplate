import RoleEntity from "../../Application/Repository/RoleEntity";
import { UserEntity } from "../../Application/Repository/UserEntity";
import { User } from "../../Domain/Model/User";
import { IAuthInterface } from "../../Domain/Repository/IAuthRepository";

class AuthRepository implements IAuthInterface {
  async authenticate(
    username: string,
    password: string
  ): Promise<UserEntity | null> {
    // Simulated authentication logic
    if (username === "user" && password === "password") {
      // Assuming User class is defined in domain/models/User.ts
      const user = new UserEntity("user_id", "user", new RoleEntity("user"));
      return user;
    }
    return null; // Return null for failed authentication
  }
}

export default AuthRepository;
