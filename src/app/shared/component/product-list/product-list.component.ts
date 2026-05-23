import { Component, OnInit ,Input} from '@angular/core';
import { IProduct } from '../../modules/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


     @Input() productArr: Array<IProduct> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
