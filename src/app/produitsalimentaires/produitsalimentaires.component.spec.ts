import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsalimentairesComponent } from './produitsalimentaires.component';

describe('ProduitsalimentairesComponent', () => {
  let component: ProduitsalimentairesComponent;
  let fixture: ComponentFixture<ProduitsalimentairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsalimentairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsalimentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
