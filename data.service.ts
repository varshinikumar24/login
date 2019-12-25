import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   
  constructor(private http: HttpClient) { }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");

  }
}
