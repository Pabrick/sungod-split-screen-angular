import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'split-visualizer',
  templateUrl: './split-visualizer.component.html',
  styleUrls: ['./split-visualizer.component.scss'],
})
export class SplitVisualizerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('split', { static: true }) split: ElementRef | undefined;
  @ViewChild('dragger', { static: true }) dragger: ElementRef | undefined;
  private splitElem: HTMLElement | undefined;
  private dragElem: HTMLElement | undefined;

  @HostBinding('style.--overlay-width') private overlayWidth: string = '50%';
  @HostBinding('style.--screen-width') private screenWidth: string = '100%';
  @HostBinding('style.--screen-height') private screenHeight: string = '100%';
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.initScreen();
  }

  @Input() public lensesImg!: string | null;
  @Input() public sceneImg!: string | null;

  private splitWidth: number = 0;
  private splitHeight: number = 0;

  private DRAG_STATE_IDLE: string = 'idle';
  private DRAG_STATE_DRAGGING: string = 'dragging';

  private dragState: string = this.DRAG_STATE_IDLE;

  constructor() {}

  ngAfterViewInit() {
    this.splitElem = this.split?.nativeElement;
    this.dragElem = this.dragger?.nativeElement;
    this.initScreen();
    this.addListerners();
  }

  ngOnDestroy() {
    this.removeListeners();
  }

  private initScreen() {
    this.splitWidth = this.splitElem?.offsetWidth || 0;
    this.splitHeight = this.splitElem?.offsetHeight || 0;
    this.screenWidth = `${this.splitWidth}px`;
    this.screenHeight = `${this.splitHeight}px`;
  }

  private startDrag() {
    if (this.dragElem) {
      this.dragState = this.DRAG_STATE_DRAGGING;
      this.dragElem.style.pointerEvents = 'none';
    }
  }

  private stopDrag() {
    if (this.dragElem) {
      this.dragState = this.DRAG_STATE_IDLE;
      this.dragElem.style.pointerEvents = 'all';
    }
  }

  private drag(e: MouseEvent) {
    if (this.dragElem && this.dragState === this.DRAG_STATE_DRAGGING) {
      const left = Math.floor((e.offsetX * 100) / this.splitWidth);
      this.overlayWidth = `${left}%`;
    }
  }

  private addListerners() {
    this.dragElem?.addEventListener('mousedown', (e) => this.startDrag());

    this.splitElem?.addEventListener('mouseup', (e) => this.stopDrag());
    this.splitElem?.addEventListener('mousemove', (e) => this.drag(e));
    this.splitElem?.addEventListener('mouseleave', (e) => this.stopDrag());
  }

  private removeListeners() {
    this.dragElem?.removeEventListener('mousedown', (e) => this.startDrag());

    this.splitElem?.removeEventListener('mouseup', (e) => this.stopDrag());
    this.splitElem?.removeEventListener('mousemove', (e) => this.drag(e));
    this.splitElem?.removeEventListener('mouseleave', (e) => this.stopDrag());
  }
}
