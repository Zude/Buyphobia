import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductDetailsComponent }  from './product-details/product-details.component';
import { IndexComponent } from "./index/index.component";
const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'details/:dername', component: ProductDetailsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
