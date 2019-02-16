import { Component, OnInit } from '@angular/core';
import { cartItem } from '../cartItem';
import { CartService } from "../cart.service";
@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css']
})
export class SmallCartComponent implements OnInit {

   cart: cartItem[] = [];
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
   
    
    
    
  }


  }


