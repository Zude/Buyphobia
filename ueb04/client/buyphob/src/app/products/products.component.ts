import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from "../product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: product[] = [];
  


  constructor(private productService: ProductService) { 
  }
  
  
  ngOnInit() {
    this.productService.getProducts();
    
    
  }

 

  
}
