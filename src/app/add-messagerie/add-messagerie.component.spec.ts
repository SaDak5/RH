import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessagerieComponent } from './add-messagerie.component';

describe('AddMessagerieComponent', () => {
  let component: AddMessagerieComponent;
  let fixture: ComponentFixture<AddMessagerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMessagerieComponent]
    });
    fixture = TestBed.createComponent(AddMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
