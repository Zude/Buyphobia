import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cartItem } from "./cartItem";
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public cart: cartItem[] = [];

  private cartUrl = '/api/cart/send/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }



    getCart (){
      this.http.get<cartItem[]>(this.cartUrl)
      .subscribe(cartItem=>
        this.cart = cartItem
    );

  }

  sendToCart(amount: number, name: string){
    this.getCart();
    this.http.post<any>(this.cartUrl, amount);
    
  }


}
  

