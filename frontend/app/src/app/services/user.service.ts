import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';
import { USERS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { } 

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(USERS_URL);
  }
}
