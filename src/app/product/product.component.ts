import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/shared-library/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  constructor(){
    // this.product = [];
    
  }
  ngOnInit(): void {
    console.log(this.product)
  }
}
