import { Todo } from "../../Model/Todo";
import { TodoRepository } from "../../Repository/TodoRepository";

export interface RemoveTodosUseCase {
  invoke: (id: string) => Promise<Todo>;
}

export class RemoveTodo implements RemoveTodosUseCase {
  private todoRepo: TodoRepository;
  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(id: string) {
    return this.todoRepo.delete(id);
  }
}
