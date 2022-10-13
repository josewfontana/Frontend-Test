import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, tap } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private lastCartId: number = 0;

  constructor(private http: HttpClient) { }


  private getLocalStorageCartId(){
    return localStorage.getItem("cartId");
  }

  getCart(){
    return localStorage.getItem("cart");
  }

  getCarts(){
    return firstValueFrom(this.http.get("http://localhost:8080/carts"))
      .then((value) => {
        return value
      })
      
  }

  setcart(obj: string){
    localStorage.setItem("cart", obj)
  }

  async addToCart(id: number){
    await this.getCarts()
      .then((val: any) => {
        this.lastCartId = val[val.length -1].id;
      })

    const obj = {
      id: this.lastCartId + 1,
      products: !!this.getCart() ? [
        ...JSON.parse(this.getCart()!).products,
        {
          id: id
        }
      ] : [
        {
          id: id
        }
      ]
    }
    this.setcart(JSON.stringify(obj));
  }
}
