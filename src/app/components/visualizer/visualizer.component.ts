import { AfterViewInit, Component } from '@angular/core';
import { Observable, combineLatest, map, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
})
export class VisualizerComponent {
  public sceneImg: string = '';
  public lensesImg: string = '';
  public lensType: string = '';
  public lensColour: string = '';

  public sceneList!: any[];
  public currentScene!: string;

  constructor(public dataSrv: DataService) {
    combineLatest([
      this.dataSrv.getSceneData$(),
      this.dataSrv.currentScene$,
      this.dataSrv.currentLenses$,
    ])
      .pipe(
        map(([sceneList, currentScene, currentLenses]) => {
          this.sceneList = sceneList;
          this.currentScene = currentScene;
        })
      )
      .subscribe(() => {
        this.setScene(this.dataSrv.currentScene);
      });
  }

  public setScene(name: string) {
    const selectedScene = this.sceneList.find(
      ({ sceneName }) => sceneName === name
    );

    const currentLenses =
      selectedScene?.sceneImages[this.dataSrv.currentLenses];

    this.sceneImg = selectedScene.nakedEyeImage.responsiveImage.src;
    this.lensesImg = currentLenses.image.responsiveImage.src;
    this.lensType = currentLenses?.lensType;
    this.lensColour = currentLenses?.lensColour;
  }

  public onSelectChange() {
    this.dataSrv.setScene(this.currentScene);
  }
}
