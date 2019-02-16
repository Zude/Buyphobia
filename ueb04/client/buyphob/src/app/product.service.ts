import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from "./product";
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  public product: product[] = [];
  public detailProduct: product;
  private productsUrl = '/api/products';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }



    getProducts (){
      this.http.get<product[]>(this.productsUrl)
      .pipe(
        tap(products => this.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      )
      .subscribe(product=>
        this.product = product
    );
    
    }

  private log(message: string) {
    this.messageService.add(`productService: ${message}`);
  }

  

  getProduct(term: string){
      this.getProducts();
      this.http.get<product>(`${this.productsUrl}/details/?dername=${term}`)
      .subscribe(product => this.detailProduct = product);
    
    
    

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  

  /** PUT: update the product on the server */
  updateProduct (product: product): Observable<any> {
  return this.http.put(this.productsUrl, product, httpOptions).pipe(
    tap(_ => this.log(`updated product dername=${product.dername}`)),
    catchError(this.handleError<any>('updateProduct'))
  );
}



  
}
