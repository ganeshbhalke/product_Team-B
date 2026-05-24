import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { IProduct } from '../../modules/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

@Output() emitEditObj=new EventEmitter<IProduct>();
     @Input() productArr: Array<IProduct> = [];

  constructor() { }

  ngOnInit(): void {
  }
  onEdit(PostObj:IProduct){
    this.emitEditObj.emit(PostObj);
  }

}
