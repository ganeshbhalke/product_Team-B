import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  getMsg !: string
  constructor(
    @Inject(MAT_DIALOG_DATA) msg : string,
    private _matDialRef : MatDialogRef<ConfirmDialogComponent>
  ) { this.getMsg = msg}

  ngOnInit(): void {
  }

  onClose(flag: boolean){
    this._matDialRef.close(flag)
  }

}
