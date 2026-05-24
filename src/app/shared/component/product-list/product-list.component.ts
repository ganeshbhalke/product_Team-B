import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../modules/product';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from '../../Service/snack-bar.service';
import { MatIconModule } from "@angular/material/icon";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  
})
export class ProductListComponent implements OnInit {
  

  @Input() productArr: Array<IProduct> = [];

<<<<<<< HEAD
=======
  @Output() emitEditProduct:EventEmitter<IProduct> = new EventEmitter<IProduct>();
>>>>>>> 51d83c1 (resolved merge delete fun...)


  @Output() emitEditObj = new EventEmitter<IProduct>();

@Output() emitRemoveProduct = new EventEmitter<string>();


  constructor(
    private _matDialog: MatDialog,
    private _matsnackbar: SnackBarService
  ) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD


  onEdit(product: IProduct) {
    this.emitEditObj.emit(product);
  }


  onRemove(product: IProduct) {

    this._matDialog.open(ConfirmDialogComponent, {
  
      width: '400px',
  
      data: `Are you sure you want to remove product with id ${product.productId} ?`
  
    })
    .afterClosed()
    .subscribe(res => {
  
      if(res){
  
        this.emitRemoveProduct.emit(product.productId);
  
        this._matsnackbar.openSnackBar(
          `Product with id ${product.productId} removed successfully`
        );
  
      }
  
    });
  
  }
=======
  onEdit(PostObj:IProduct){
    this.emitEditProduct.emit(PostObj);
  }

  // onEdit(product: IProduct) {
  //   this.emitEditProduct.emit(product);
  // }
>>>>>>> 51d83c1 (resolved merge delete fun...)

}