import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierComponent } from './soldier.component';

describe('SoldierComponent', () => {
  let component: SoldierComponent;
  let fixture: ComponentFixture<SoldierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoldierComponent]
    });
    fixture = TestBed.createComponent(SoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
