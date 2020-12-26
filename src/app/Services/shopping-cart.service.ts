import { Injectable } from '@angular/core';
import { IProduct, IProductAddToCart } from './../interfaces';
import { Observable, Subject} from 'rxjs';
import { Time } from '@angular/common';
import { DatePipe } from '@angular/common'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartCreatedAt:Number;
  CartProducts: IProductAddToCart[] = [];
  productQuantity = new Subject<number>();

 private baseUrl = "http://localhost:8000/api";

  constructor(private http:HttpClient) { }

  // getOrCreateCart(){
  //  if(localStorage.getItem("cartCreatedAt")){
  //   this.cartCreatedAt = localStorage.getItem("cartCreatedAt");
  //   }
  //   else this.cartCreatedAt = Date.now()| date:'medium';
  // }

  // ChangeQuantity(pId, amt){

  //        if(!this.CartProducts.find(a => a.Id == pId)){
  //        let p = <IProductAddToCart>{} ;
  //        console.log("PID is"+pId);
  //         p.Id = pId;
  //         p.qty=0;
  //         p.qty = p.qty + amt;
  //         // this.CartProducts.push(p);
  //         console.log("PID="+ p.Id + "," +"qnty =" + p.qty );
  //         return;
  //        }

  //        if(this.CartProducts.find(a => a.Id == pId)){
  //         let p = this.CartProducts.find(a => a.Id == pId);
  //         p.qty = p.qty + amt;
  //         // this.CartProducts.push(p);
  //         console.log("PID="+ p.Id + "," +"qnty =" + p.qty );
  //         return;
  //        }
  // }

  // getQuantity(pId): Observable<number>{
  //   let p = this.CartProducts.find(a => a.Id == pId)
  //   if(p){
  //   this.;
  //   }
  //   else{
  //     return 0;
  //   }
  // }

  addToCart(product, qty){
    //  this.CartProducts.forEach(product => {
    //    console.log(product);
    //  });
         let pId = product._id;
         let p = this.CartProducts.find(a => a.Id == pId);
         if(p){
          // this.CartProducts.push(p);
          // p.qty = p.qty + qty;
          p.qty = qty;
          console.log("product with id =" +p.Id + "and quantity" + p.qty + "is added uppper");
          return;
         }
         else{
          let p = <IProductAddToCart>{} ;
           p.Id = pId;
           p.qty = qty;
           p.name = product.name;
           p.price = product.price;
           this.CartProducts.push(p);
           console.log("product with id =" +p.Id + "and quantity" + p.qty + "is added lower");
           return;
         }
    
      }

      getQuantity(pId){
        let p = this.CartProducts.find(a => a.Id == pId);
        if(p){
          return p.qty;
        }
        else{
          return 0;
        }
      }
    

  // addToCart(product:IProductAddToCart){
  //   // this.getOrCreateCart();
  //   // console.log(product.Id);

  //   // if(!this.CartProducts.find(a => a.Id == product.Id)){
  //   //   this.CartProducts.push(product);
  //   //   return;
  //   // }
  //   // // console.log(p.Id);
  //   // else{
  //   //  let p =  this.CartProducts.find(a => a.Id == product.Id);
  //   //  p.qty = p.qty + product.qty;
  //   //  this.CartProducts.push(p);
  //   //  return;
  //   // }
  //   this.CartProducts.push(product);

  // }

  getTotalItemsInCart(){
    return this.CartProducts.length;
  }

  getAllFromCart(){
    return this.CartProducts;
  }

  orderCart(products, shippingDetails){
    this.http.post<any>(this.baseUrl + "/cart", {products, shippingDetails})
              .subscribe(res => console.log("Your Order is placed"));
  }

  ordersForSeller(){
   return this.http.get<any>(this.baseUrl + "/seller/orders");
  }
}
