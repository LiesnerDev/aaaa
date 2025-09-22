import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: string[] = [];
  newTask: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.subscription = this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTask(): void {
    const task = this.newTask.trim();
    if (task) {
      this.taskService.addTask(task);
      this.newTask = '';
    }
  }

  removeTask(index: number): void {
    this.taskService.removeTask(index);
  }
}
