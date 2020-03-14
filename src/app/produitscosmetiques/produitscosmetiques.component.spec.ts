import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitscosmetiquesComponent } from './produitscosmetiques.component';

describe('ProduitscosmetiquesComponent', () => {
  let component: ProduitscosmetiquesComponent;
  let fixture: ComponentFixture<ProduitscosmetiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitscosmetiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitscosmetiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
