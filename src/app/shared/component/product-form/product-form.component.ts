import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { IProduct } from '../../modules/product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  isInEditMode: boolean = false;

  @Output() emitProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>()
  @Input() editObj!: IProduct;

  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createProductForm()
  }

  createProductForm() {

    this.productForm = this.fb.group({

      pname: [''],
      price: [''],
      category: [''],
      rating: [''],
      imgUrl: [''],
      offerPrice: [''],
      discount: [''],

    })

  }

  onProductAdd() {

    let productObj: IProduct = {
      pname: this.productForm.value.pname,
      price: this.productForm.value.price,
      category: this.productForm.value.category,
      rating: this.productForm.value.rating,
      imgUrl: this.productForm.value.imgUrl,
      productId: Date.now().toString(),
      offerPrice: this.productForm.value.offerPrice,
      discount: this.productForm.value.discount,
    }

    console.log(productObj)

    this.emitProduct.emit(productObj)

    this.productForm.reset()

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['editObj']) {

      this.isInEditMode = true

      this.productForm.patchValue({

        pname: this.editObj.pname,
        price: this.editObj.price,
        category: this.editObj.category,
        rating: this.editObj.rating,
        imgUrl: this.editObj.imgUrl,
        offerPrice: this.editObj.offerPrice,
        discount: this.editObj.discount

      })

    }

  }

  ngOnInit(): void {

  }

}