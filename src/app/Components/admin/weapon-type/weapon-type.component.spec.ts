import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponTypeComponent } from './weapon-type.component';

describe('WeaponTypeComponent', () => {
  let component: WeaponTypeComponent;
  let fixture: ComponentFixture<WeaponTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponTypeComponent]
    });
    fixture = TestBed.createComponent(WeaponTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
