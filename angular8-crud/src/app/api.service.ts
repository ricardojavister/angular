import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Todo } from './todo';

const apiUrl = "http://localhost:8080/Person";
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(apiUrl, httpOptions)
      .pipe(
        tap(heroes => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      );
  }
   
  getTodo(id: number): Observable<Todo> {
    const url = `${apiUrl}?id=${id}`;
    return this.http.get<Todo>(url).pipe(
      tap(_ => console.log(`fetched todo id=${id}`)),
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }
   
  addTodo (todo): Observable<Todo> {
     
    return this.http.post<Todo>(`${apiUrl}/create.php`, todo, httpOptions).pipe(
      tap((todo: Todo) => console.log(`added todo w/ id=${todo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }
   
  updateTodo (id, todo): Observable<any> {
    const url = `${apiUrl}/update.php?id=${id}`;
    return this.http.put(url, todo, httpOptions).pipe(
      tap(_ => console.log(`updated todo id=${id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }
   
  deleteTodo (id): Observable<Todo> {
    const url = `${apiUrl}/delete.php?id=${id}`;
   
    return this.http.delete<Todo>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted todo id=${id}`)),
      catchError(this.handleError<Todo>('deletetodo'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
