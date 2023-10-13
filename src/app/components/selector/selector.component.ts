import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { mockLenses } from './mockLenses';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  public isColourMenuOn: boolean = false;

  public lenseList: string[] = mockLenses;

  constructor(public dataSrv: DataService) {}
}
