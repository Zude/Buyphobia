import { Component, OnInit, Input } from '@angular/core';
import { product } from "../product";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService }  from '../product.service';
import { CartService }  from '../cart.service';
import { cartItem } from '../cartItem';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() 
  
  product: product;
  itemAmount: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private cartService: CartService
  ) {}
  
  

  ngOnInit(): void {
    
   this.getProduct();
   this.itemAmount = 1;

  }

 
getProduct(): void{
  const dername = this.route.snapshot.paramMap.get('dername');   
  this.productService.getProduct(dername);
  
}

onSubmit(amount: number): void{
 
  this.cartService.sendToCart(amount, this.route.snapshot.paramMap.get('dername'));
}





}
