import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  recommendedProducts(){
    return this.http.get('http://localhost:8080/recommendeds')
  }

  getProductList(page: number, limit: number){
    return this.http.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
  }
}
