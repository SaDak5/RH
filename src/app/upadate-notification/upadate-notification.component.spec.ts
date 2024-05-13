import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateNotificationComponent } from './upadate-notification.component';

describe('UpadateNotificationComponent', () => {
  let component: UpadateNotificationComponent;
  let fixture: ComponentFixture<UpadateNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpadateNotificationComponent]
    });
    fixture = TestBed.createComponent(UpadateNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
