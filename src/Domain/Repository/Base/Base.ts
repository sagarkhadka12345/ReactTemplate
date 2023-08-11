import { Todo } from "../../Model/Todo";

export interface IRepository<T extends object> {
  getAll(): Promise<Array<T>>;
  delete(id: string): Promise<T>;
  insert(id: string): Promise<T>;
  get(id: string): Promise<T>;
  update(id: string): Promise<T>;
}
