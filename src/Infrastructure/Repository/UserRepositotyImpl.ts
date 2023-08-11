import { User } from "../../Domain/Model/User";
import { IUserRepository } from "../../Domain/Repository/IUserRepository";

export class UserRespositoryImpl implements IUserRepository {
  register(user: User): string {
    throw new Error("Method not implemented.");
  }
  login(username: string, password: string): User {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  insert(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
