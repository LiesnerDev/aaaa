import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((data: any[]) => {
      this.todos = data;
    });
  }

  addTodo() {
    if (!this.newTodoTitle.trim()) {
      return;
    }
    const newTodo = { title: this.newTodoTitle, isCompleted: false };
    this.todoService.addTodo(newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.newTodoTitle = '';
    });
  }

  updateTodo(updatedTodo: any) {
    this.todoService.updateTodo(updatedTodo.id, updatedTodo).subscribe(() => {
      // Atualização concluída, podemos atualizar a lista se necessário
      this.getTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
