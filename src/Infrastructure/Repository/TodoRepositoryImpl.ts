import { Todo } from "../../Domain/Model/Todo";
import { TodoRepository } from "../../Domain/Repository/TodoRepository";
import TodoDataSource from "../../Application/DataSource/TodoDataSource";

export class TodoRepositoryImpl implements TodoRepository {
  dataSource: TodoDataSource;

  constructor(_datasource: TodoDataSource) {
    this.dataSource = _datasource;
  }
  insert(id: string): Promise<Todo> {
    return this.dataSource.createTodo(id);
  }
  getAll(): Promise<Todo[]> {
    return this.dataSource.getTodos();
  }
  delete(id: string): Promise<Todo> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<Todo> {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<Todo> {
    throw new Error("Method not implemented.");
  }

  async markAsRead(id: string) {
    return this.dataSource.toggleTodoCheck(id);
  }

  async removeTodo(id: string) {
    return this.dataSource.removeTodo(id);
  }
}
