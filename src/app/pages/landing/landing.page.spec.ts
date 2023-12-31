import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingPage } from './landing.page';

describe('LandingPage', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LandingPage],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LandingPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sungod'`, () => {
    const fixture = TestBed.createComponent(LandingPage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sungod');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LandingPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'sungod app is running!'
    );
  });
});
