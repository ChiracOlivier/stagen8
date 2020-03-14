import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestraiteursComponent } from './servicestraiteurs.component';

describe('ServicestraiteursComponent', () => {
  let component: ServicestraiteursComponent;
  let fixture: ComponentFixture<ServicestraiteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicestraiteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicestraiteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
