import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { IProduct } from '../../modules/product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  isInEditMode: boolean = false;

  @Input() editProductObj!: IProduct;

  @Output() emitProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @Output() emitUpdateProduct: EventEmitter<IProduct> =
    new EventEmitter<IProduct>();

  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createProductForm();
  }

  ngOnChanges(): void {
    if (this.editProductObj) {
      this.isInEditMode = true;
      this.productForm.patchValue(this.editProductObj);
    }
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
    });
  }

  onProductAdd() {
    let productObj: IProduct = {
      pname: this.productForm.value.pname,
      price: this.productForm.value.price,
      category: this.productForm.value.category,
      rating: this.productForm.value.rating,
      imgUrl: this.productForm.value.imgUrl,
      offerPrice: this.productForm.value.offerPrice,
      discount: this.productForm.value.discount,
      productId: Date.now().toString()
    };

    this.emitProduct.emit(productObj);
    this.productForm.reset();
  }

  onUpdateProduct() {
    let updatedObj: IProduct = {
      pname: this.productForm.value.pname,
      price: this.productForm.value.price,
      category: this.productForm.value.category,
      rating: this.productForm.value.rating,
      imgUrl: this.productForm.value.imgUrl,
      offerPrice: this.productForm.value.offerPrice,
      discount: this.productForm.value.discount,
      productId: this.editProductObj.productId
    };

    this.emitUpdateProduct.emit(updatedObj);

    this.productForm.reset();
    this.isInEditMode = false;
  }

  ngOnInit(): void {

  }
}