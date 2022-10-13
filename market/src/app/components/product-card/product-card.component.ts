import { Component, Input, OnInit } from '@angular/core';
import {faCartShopping as faCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  faCart = faCart;

  constructor() { }

  ngOnInit(): void {
  }

}
