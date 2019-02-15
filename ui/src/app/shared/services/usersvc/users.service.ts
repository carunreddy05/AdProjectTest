import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers = () => {
    let options;
    // const url = 'http://localhost:3000/results';
    const url = './api/users/db.json';

    return this.http.get(url, options ).pipe(
      map((data) => {
          return data;
    }),
    retry(3),
    catchError(this.handleError));
  }

  getMaleUsers = () => {
    let options;
    const url = 'http://localhost:6467/results?gender=male';

    return this.http.get(url, options ).pipe(
      map((data) => {
          return data;
    }),
    retry(3),
    catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    if(error.error instanceof ErrorEvent) {
        console.log('An error occurred:', error.error.message);
    }else if(error) {
        console.log(`Backend returned code ${error.status}`);
    } else {
      console.log('unknown error: Rest Service');
    }
    return 'error';
  }

}
