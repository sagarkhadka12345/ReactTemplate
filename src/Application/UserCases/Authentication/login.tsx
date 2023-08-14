// application/useCases/authentication/Login.ts
import AuthService from "../../Services/Authentication/Authentication";
import { User } from "../../../Domain/Model/User";
import Role from "../../../Domain/Model/Role";
import { UserEntity } from "../../Repository/UserEntity";

export class LoginUseCase {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async execute(
    username: string,
    password: string
  ): Promise<UserEntity | null> {
    const user = await this.authService.login(username, password);
    return user;
  }
}
