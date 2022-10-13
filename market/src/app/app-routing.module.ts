import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsListComponent } from './views/products-list/products-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'cart', component: CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
