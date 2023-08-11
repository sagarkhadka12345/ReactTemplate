import { User } from "../Model/User";
import { IRepository } from "./Base/Base";

export interface IUserRepository extends IRepository<User> {
  register(user: User): string;
  login(username: string, password: string): User;
}
