import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(productDetails){
    console.log("adding product");
   this.productService.createProductBySeller(productDetails);
  }

}
