import RoleEntity from "../../Repository/RoleEntity";
import { User } from "../../../Domain/Model/User";
import { UserEntity } from "../../Repository/UserEntity";

export class AuthRepository {
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

// infrastructure/auth/AuthService.ts
class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(username: string, password: string): Promise<UserEntity | null> {
    return this.authRepository.authenticate(username, password);
  }
}

export default AuthService;
