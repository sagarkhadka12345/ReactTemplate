import { User } from "../../../Domain/Model/User";
import { IAuthInterface } from "../../../Domain/Repository/IAuthRepository";

class AuthService {
  private authRepository: IAuthInterface;

  constructor(authRepository: IAuthInterface) {
    this.authRepository = authRepository;
  }

  async login(username: string, password: string): Promise<User | null> {
    return await this.authRepository.authenticate(username, password);
  }
}

export default AuthService;
