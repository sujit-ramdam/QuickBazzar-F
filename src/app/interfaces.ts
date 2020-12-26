export interface IProduct{
  Id:String ;
  title:String;
  description:String;
  price:Number;
}

export interface IAccessTokens{
  token:String,
  userId:String,
  isSeller:boolean
}

export interface IProductAddToCart{
  Id:string;
  name:string;
  qty:number;
  price:number;
}