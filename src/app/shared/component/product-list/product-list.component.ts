import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../modules/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productArr: Array<IProduct> = [];

  @Output() emitEditProduct = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(product: IProduct) {
    this.emitEditProduct.emit(product);
  }

}