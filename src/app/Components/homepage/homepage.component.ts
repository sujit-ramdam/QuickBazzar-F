import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../Services/products.service';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { IProductAddToCart } from './../../interfaces';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products:any;
  CartProducts: IProductAddToCart[] = [];
  NumberOfItemsInCumber = 0;
  
  constructor(
    private productsService:ProductsService,
    private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.productsService.fetchAllProducts().
    subscribe(
      data => {
        this.products = data
        console.log(this.products)
      }
    )
    }

    showDetailsPage(product){
      this.productsService.setProductDetails(product);
    }


    // ChangeQty(pId, amt){
    //   this.shoppingCart.ChangeQuantity(pId, amt);
    // }

    // addToCartService(pId){
    //   this.shoppingCart.addToCart(pId);
    // }

  // this.productAddedTocart.find(p=>p.Id==p.Id).Quantity = p.Quantity+1;
  // {const bar: foo = { one: 5, two: "hello" };

  // addToCartService(pId, pName){
  //   let p = this.products.find(a => a.Id = pId);
  //      if(p){
  //        p.name = pName; 
  //      }
  //      this.shoppingCart.addToCart(p);
  // }

  totalItemsInCart(){
   return this.shoppingCart.getTotalItemsInCart();
  }

}

