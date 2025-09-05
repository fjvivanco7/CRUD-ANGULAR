import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({ providedIn: 'root' })
export class ProductService {
private readonly baseUrl = 'http://localhost:3000/products'; // endpoint json-server


constructor(private http: HttpClient) {}


getAll(): Observable<Product[]> {
return this.http.get<Product[]>(this.baseUrl); // GET /products
}


getById(id: number): Observable<Product> {
return this.http.get<Product>(`${this.baseUrl}/${id}`); // GET /products/:id
}


create(data: Product): Observable<Product> {
return this.http.post<Product>(this.baseUrl, data); // POST /products
}


update(id: number, data: Product): Observable<Product> {
return this.http.put<Product>(`${this.baseUrl}/${id}`, data); // PUT /products/:id
}


delete(id: number): Observable<void> {
return this.http.delete<void>(`${this.baseUrl}/${id}`); // DELETE /products/:id
}
}