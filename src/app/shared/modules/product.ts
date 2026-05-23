import { Injectable } from "@angular/core";



Injectable({
    providedIn:'root'
})

export interface IProduct{

  // id:string;
  pname : string;
  price : number;
  category : string;
  rating : number;
  imgUrl : string;
  productId : string;
  offerPrice : number;
discount : string;

}