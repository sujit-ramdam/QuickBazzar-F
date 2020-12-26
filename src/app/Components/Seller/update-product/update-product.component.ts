import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../Services/auth.service';
import { ProductsService } from './../../../Services/products.service';


@Component({
  selector: 'update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
 
  productBeforeUpdated:any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
     this.productBeforeUpdated = this.productService.getProductBeforeUpdated();
     console.log("hello" +this.productBeforeUpdated._id)
  }

  updateProduct(product){
      this.productService.updateProduct(product);
  }

}
