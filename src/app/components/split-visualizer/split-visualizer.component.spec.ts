import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitVisualizerComponent } from './split-visualizer.component';

describe('SplitVisualizerComponent', () => {
  let component: SplitVisualizerComponent;
  let fixture: ComponentFixture<SplitVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitVisualizerComponent]
    });
    fixture = TestBed.createComponent(SplitVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
