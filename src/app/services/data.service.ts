import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public defaultScene: string = 'Naked Eye';
  public currentScene: string = 'Road';
  public currentLenses: string = 'rgle_8Pblue';

  public readonly currentLenses$: Observable<string>;
  private readonly currentLensesSubject: BehaviorSubject<string>;

  public readonly currentScene$: Observable<string>;
  private readonly currentSceneSubject: BehaviorSubject<string>;

  private productDataUrl =
    'https://www.sungod.co/products/9150/renegades?pdp=1';
  private sceneDataUrl =
    'https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json';

  constructor(private http: HttpClient) {
    this.currentLensesSubject = new BehaviorSubject<string>(this.currentLenses);
    this.currentLenses$ = this.currentLensesSubject.asObservable();

    this.currentSceneSubject = new BehaviorSubject<string>(this.currentScene);
    this.currentScene$ = this.currentSceneSubject.asObservable();
  }

  public getProductData$(): Observable<any> {
    return this.http.get<any>(this.productDataUrl);
  }
  public getSceneData$(): Observable<any> {
    return this.http.get<any>(this.sceneDataUrl);
  }

  public setLenses(lenses: string) {
    this.currentLenses = lenses;
    this.currentLensesSubject.next(lenses);
  }

  public setScene(scene: string) {
    this.currentScene = scene;
    this.currentSceneSubject.next(scene);
  }
}
