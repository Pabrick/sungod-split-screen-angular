import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensMenuComponent } from './lens-menu.component';

describe('LensMenuComponent', () => {
  let component: LensMenuComponent;
  let fixture: ComponentFixture<LensMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LensMenuComponent]
    });
    fixture = TestBed.createComponent(LensMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
