import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/ProductInteface';
import { ProductsService } from '../../controllers/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<ProductInterface> = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.recommendedProducts()
      .subscribe(
        (products: any) => {
          this.products = [...products]
        }
      )
  }

}
