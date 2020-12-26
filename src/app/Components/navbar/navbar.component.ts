import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../Services/shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   TotalItemsInCart:number;

  constructor( private shoppingCart:ShoppingCartService){ }

  ngOnInit(): void {
    this.TotalItemsInCart = this.shoppingCart.getTotalItemsInCart();
  }

}
