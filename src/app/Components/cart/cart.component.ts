import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { IProduct, IProductAddToCart } from './../../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   cartItems:IProductAddToCart[] = [] ;
   ShowShippingDetailsForm:boolean;
   AllTotal:number = 0;

  constructor( private cartSevice:ShoppingCartService) { }

  ngOnInit(){
    this.cartItems=this.cartSevice.getAllFromCart();
    this.cartItems.forEach(item => {
      this.AllTotal = this.AllTotal + (item.price * item.qty) ;
    });
  }

  orderCart(shippingDetails){
    this.cartSevice.orderCart(this.cartItems, shippingDetails);
  }

}
