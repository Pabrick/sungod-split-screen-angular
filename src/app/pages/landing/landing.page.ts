import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  constructor(public dataSrv: DataService) {
    this.dataSrv.getProductData$().subscribe((data) => {
      console.log('product', data);
    });

    this.dataSrv.getSceneData$().subscribe((data) => {
      console.log('scene', data);
    });
  }
}
