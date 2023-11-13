import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartenirComponent } from './appartenir.component';

describe('AppartenirComponent', () => {
  let component: AppartenirComponent;
  let fixture: ComponentFixture<AppartenirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartenirComponent]
    });
    fixture = TestBed.createComponent(AppartenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
