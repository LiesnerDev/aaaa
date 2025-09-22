import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<string[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  addTask(task: string): void {
    const tasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...tasks, task]);
  }

  removeTask(index: number): void {
    const tasks = this.tasksSubject.getValue();
    tasks.splice(index, 1);
    this.tasksSubject.next([...tasks]);
  }
}
