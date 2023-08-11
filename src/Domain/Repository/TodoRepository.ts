import { Todo } from "../Model/Todo";
import { IRepository } from "./Base/Base";

export interface TodoRepository extends IRepository<Todo> {
  markAsRead(id: string): Promise<boolean>;
}
