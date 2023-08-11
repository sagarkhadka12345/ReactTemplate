import { User } from "../Model/User";

export interface IAuthInterface {
  authenticate(username: string, password: string): Promise<User | null>;
}
