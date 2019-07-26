import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  url ='https://nestjs-ecommerce.herokuapp.com/products';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Produto[]>(this.url);
  }

  create (produto: Produto) {
    return this.http.post<Produto>(this.url, produto);
  }
}
