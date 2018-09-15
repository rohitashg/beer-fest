import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestorequriesComponent } from './firestorequries.component';

describe('FirestorequriesComponent', () => {
  let component: FirestorequriesComponent;
  let fixture: ComponentFixture<FirestorequriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestorequriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestorequriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
