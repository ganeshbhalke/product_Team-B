import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashaboardComponent } from './product-dashaboard.component';

describe('ProductDashaboardComponent', () => {
  let component: ProductDashaboardComponent;
  let fixture: ComponentFixture<ProductDashaboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashaboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
