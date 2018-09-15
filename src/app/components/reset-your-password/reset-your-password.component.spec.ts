import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetYourPasswordComponent } from './reset-your-password.component';

describe('ResetYourPasswordComponent', () => {
  let component: ResetYourPasswordComponent;
  let fixture: ComponentFixture<ResetYourPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetYourPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetYourPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
