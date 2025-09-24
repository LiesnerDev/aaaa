import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  toggleCompletion() {
    this.todo.isCompleted = !this.todo.isCompleted;
    this.update.emit(this.todo);
  }

  deleteItem() {
    this.delete.emit(this.todo.id);
  }
}
