import Role from "../../Domain/Model/Role";
import { User } from "../../Domain/Model/User";
import { IAuthInterface } from "../../Domain/Repository/IAuthRepository";

class AuthRepository implements IAuthInterface {
  async authenticate(username: string, password: string): Promise<User | null> {
    if (username === "user" && password === "password") {
      return new User(username, password, new Role("user"));
    } else if (username === "admin" && password === "admin") {
      return new User(username, password, new Role("admin"));
    }
    return null;
  }
}

const authRepository = new AuthRepository();

export default authRepository;
