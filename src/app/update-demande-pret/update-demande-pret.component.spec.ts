import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDemandePretComponent } from './update-demande-pret.component';

describe('UpdateDemandePretComponent', () => {
  let component: UpdateDemandePretComponent;
  let fixture: ComponentFixture<UpdateDemandePretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDemandePretComponent]
    });
    fixture = TestBed.createComponent(UpdateDemandePretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
