import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
// import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  url ='https://nestjs-ecommerce.herokuapp.com/users';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.url);
  }

  create (user: User) {
    return this.http.post<User>(this.url, user);
  }
}
