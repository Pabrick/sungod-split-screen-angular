import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourMenuComponent } from './colour-menu.component';

describe('ColourMenuComponent', () => {
  let component: ColourMenuComponent;
  let fixture: ComponentFixture<ColourMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourMenuComponent]
    });
    fixture = TestBed.createComponent(ColourMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
