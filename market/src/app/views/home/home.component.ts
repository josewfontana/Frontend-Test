import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../controllers/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quantity: Array<Object> = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.recommendedProducts()
      .subscribe(
        (products: any) => {
          this.quantity = [...products]
        }
      )
  }

}
