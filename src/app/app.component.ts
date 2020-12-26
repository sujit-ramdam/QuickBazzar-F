import { Component } from '@angular/core';
import { ProductsService } from './Services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuickBazzar-F';
  products=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    // this.productsService.fetchProducts().
    // subscribe(
    //   data => this.products = data
    // )
  }
}
