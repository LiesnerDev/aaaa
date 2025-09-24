import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'api/todo'; // Endpoint do back-end

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  addTodo(todo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, todo);
  }

  updateTodo(id: number, todo: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
