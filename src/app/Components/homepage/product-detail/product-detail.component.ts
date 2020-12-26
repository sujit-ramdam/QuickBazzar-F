import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';
import { ShoppingCartService } from './../../../Services/shopping-cart.service';
import { AuthService } from './../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;

  productQuantity:number =0;

  constructor(private productsService: ProductsService,
              private shoppingCart: ShoppingCartService,
              private authService: AuthService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.product =this.productsService.getProductDetails();
    this.productQuantity = this.shoppingCart.getQuantity(this.product._id);
  }

  Incr(){
    this.productQuantity = this.productQuantity + 1;
  }

  Dcr(){
    this.productQuantity = this.productQuantity - 1;
  }

  addToCart(product){
    if(this.authService.getIsAuth()){
      this.shoppingCart.addToCart(product, this.productQuantity);
    }
    else{
       console.log("you are not authenticated");
        this.router.navigate(['/signup']);
    }
  }

}
