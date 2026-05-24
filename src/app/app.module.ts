import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashaboardComponent } from './shared/component/product-dashaboard/product-dashaboard.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { ProductListComponent } from './shared/component/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { ConfirmDialogComponent } from './shared/component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    ProductDashaboardComponent,
    ProductFormComponent,
    ConfirmDialogComponent,
    ProductListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatIconModule ,
    MatDialogModule,
    ReactiveFormsModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
