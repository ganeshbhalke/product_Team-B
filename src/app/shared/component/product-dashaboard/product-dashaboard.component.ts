import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../modules/product';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../Service/snack-bar.service';

@Component({
  selector: 'app-product-dashaboard',
  templateUrl: './product-dashaboard.component.html',
  styleUrls: ['./product-dashaboard.component.scss']
})
export class ProductDashaboardComponent implements OnInit {


editObj!:IProduct;

editProductObj!: IProduct;


   constructor(
  private _snackBar:SnackBarService
  ) { }



productArr : Array<IProduct>=[
  {
    pname : 'One Plus',
    price : 24999,
    category : 'mobile',
    rating : 4.5,
    offerPrice : 22499,
    discount : '10%',
    imgUrl : 'https://m.media-amazon.com/images/I/61amb0CfMGL.jpg',
    productId : 'p1'
  },
  {
    pname : 'Boat Headphone',
    price : 2999,
    category : 'electronics',
    rating : 4.2,
    offerPrice : 1999,
    discount : '35%',
    imgUrl : 'https://m.media-amazon.com/images/I/61u1VALn6JL.jpg',
    productId : 'p4'
  },

  {
    pname : 'Nike Shoes',
    price : 5999,
    category : 'shoes',
    rating : 4.7,
    offerPrice : 4499,
    discount : '25%',
    imgUrl : 'https://m.media-amazon.com/images/I/71oEKkghg-L._UY695_.jpg',
    productId : 'p6'
  },
   {
    pname : 'iPhone 15',
    price : 79999,
    category : 'mobile',
    rating : 4.8,
    offerPrice : 69999,
    discount : '15%',
    imgUrl : 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800',
    productId : 'p11'
  },

  {
    pname : 'Samsung S24',
    price : 65999,
    category : 'mobile',
    rating : 4.6,
    offerPrice : 58999,
    discount : '11%',
    imgUrl : 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800',
    productId : 'p12'
  },

  {
    pname : 'Nike Shoes',
    price : 5999,
    category : 'shoes',
    rating : 4.4,
    offerPrice : 3999,
    discount : '33%',
    imgUrl : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800',
    productId : 'p13'
  },

  {
    pname : 'Gaming Keyboard',
    price : 3499,
    category : 'electronics',
    rating : 4.2,
    offerPrice : 2499,
    discount : '28%',
    imgUrl : 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800',
    productId : 'p14'
  },

  {
    pname : 'Smart Watch',
    price : 9999,
    category : 'watch',
    rating : 4.5,
    offerPrice : 7499,
    discount : '25%',
    imgUrl : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    productId : 'p15'
  },

  {
    pname : 'Laptop Bag',
    price : 2499,
    category : 'bag',
    rating : 4.1,
    offerPrice : 1799,
    discount : '20%',
    imgUrl : 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800',
    productId : 'p16'
  },
  {
  pname : 'Puma T-Shirt',
  price : 1999,
  category : 'fashion',
  rating : 4.3,
  offerPrice : 1299,
  discount : '35%',
  imgUrl : 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
  productId : 'p17'
},

{
  pname : 'Canon Camera',
  price : 45999,
  category : 'camera',
  rating : 4.7,
  offerPrice : 39999,
  discount : '13%',
  imgUrl : 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800',
  productId : 'p18'
},

{
  pname : 'Sony Headphones',
  price : 8999,
  category : 'electronics',
  rating : 4.5,
  offerPrice : 6499,
  discount : '28%',
  imgUrl : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800',
  productId : 'p19'
},

{
  pname : 'Wooden Chair',
  price : 3499,
  category : 'furniture',
  rating : 4.0,
  offerPrice : 2799,
  discount : '20%',
  imgUrl : 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800',
  productId : 'p20'
},

{
  pname : 'Backpack',
  price : 2499,
  category : 'bag',
  rating : 4.4,
  offerPrice : 1799,
  discount : '30%',
  imgUrl : 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
  productId : 'p21'
},

{
  pname : 'Wireless Mouse',
  price : 1499,
  category : 'electronics',
  rating : 4.2,
  offerPrice : 999,
  discount : '33%',
  imgUrl : 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800',
  productId : 'p22'
}

];


  
  

  onProductAdd(product : IProduct){

    this.productArr.push(product)
    console.log(product);
        this._snackBar.openSnackBar(`The product With id ${product.productId} Added Successfully!!!`)

  


  //   localStorage.setItem(
  //   'product',
  //   JSON.stringify(this.productArr)
  // )
    

  }


  onEditProduct(product: IProduct) {
    this.editProductObj = product;
  }

 onProductUpdate(product: IProduct) {

  let index = this.productArr.findIndex(
    prod => prod.productId === product.productId
  );

  this.productArr[index] = product;

  this._snackBar.openSnackBar(
    `The product With id ${product.productId} Updated Successfully!!!`
  );
}
ngOnInit(): void {

  // let data = localStorage.getItem('product');

  // if(data){

  //   this.productArr = JSON.parse(data);

  // }
  

}
onEdit(PostObj: IProduct){
  this.editObj = PostObj;
}

onRemoveProduct(productId: string){

  let getIndex = this.productArr.findIndex(
    prod => prod.productId === productId
  );

  this.productArr.splice(getIndex, 1);

  this._snackBar.openSnackBar(
    `The product with id ${productId} removed successfully!!!`
  );

}

}

 



