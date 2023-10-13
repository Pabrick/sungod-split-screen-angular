import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'lens-menu',
  templateUrl: './lens-menu.component.html',
  styleUrls: ['./lens-menu.component.scss'],
})
export class LensMenuComponent {
  @Input() lensList!: string[];
  constructor(public dataSrv: DataService) {}

  public selectLens(lens: string) {
    this.dataSrv.setLenses(lens);
  }
}
