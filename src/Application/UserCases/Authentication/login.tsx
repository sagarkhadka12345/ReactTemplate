// application/useCases/authentication/Login.ts

import { User } from "../../../Domain/Model/User";
import { IAuthInterface } from "../../../Domain/Repository/IAuthRepository";

export class LoginUseCase {
  _authRepository: IAuthInterface;
  constructor(authRepositroy: IAuthInterface) {
    this._authRepository = authRepositroy;
  }
  async execute(username: string, password: string): Promise<User | null> {
    const user = await this._authRepository.authenticate(username, password);
    return user;
  }
}
