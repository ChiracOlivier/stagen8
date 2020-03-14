import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversesinfosComponent } from './diversesinfos.component';

describe('DiversesinfosComponent', () => {
  let component: DiversesinfosComponent;
  let fixture: ComponentFixture<DiversesinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversesinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversesinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
