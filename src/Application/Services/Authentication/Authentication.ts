import RoleEntity from "../../DataSource/API/Entity/RoleEntity";
import { User } from "../../../Domain/Model/User";

export class AuthRepository {
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

// infrastructure/auth/AuthService.ts
class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(username: string, password: string): Promise<User | null> {
    return this.authRepository.authenticate(username, password);
  }
}

export default AuthService;
