import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../interface';

@Component({
  selector: 'product-card',
    templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;


  constructor() { }

  ngOnInit(): void {


  }


}
