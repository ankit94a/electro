import { Component } from '@angular/core';
import { Product } from 'src/shared-library/model/product';
import { CoreApiService } from 'src/shared-library/service/core-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electro.';
  productList:Product[]=[]
  constructor(private CoreApiService:CoreApiService){
    this.getNewProduct()
  }

  getNewProduct(){
    this.CoreApiService.getWithHeaders().subscribe(res =>{
      if(res){
        this.productList = res;
      }
    })
  }
}
