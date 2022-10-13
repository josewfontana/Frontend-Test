import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/controllers/products.service';
import { ProductInterface } from 'src/app/interfaces/ProductInteface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  page: number = 1;
  limit: number = 10;
  products: Array<ProductInterface> = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  testSelect(e: Event){
    this.limit = parseInt((e.target as HTMLSelectElement).value);
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductList(this.page, this.limit)
      .subscribe(
        (products: any) => {
          this.products = [...products]
        }
      )
  }

  onScroll(): void {
    ++this.page;
    this.productService.getProductList(this.page, this.limit)
      .subscribe(
        (products: any) => {
          this.products.push(...products)
        }
      )
  }
}
