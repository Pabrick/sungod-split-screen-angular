import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LandingPage } from './pages/landing/landing.page';
import { SelectorComponent } from './components/selector/selector.component';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { ColourMenuComponent } from './components/colour-menu/colour-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SplitVisualizerComponent } from './components/split-visualizer/split-visualizer.component';
import { FormsModule } from '@angular/forms';
import { LensMenuComponent } from './components/lens-menu/lens-menu.component';

@NgModule({
  declarations: [
    LandingPage,
    SelectorComponent,
    VisualizerComponent,
    TabMenuComponent,
    ColourMenuComponent,
    SplitVisualizerComponent,
    LensMenuComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [LandingPage],
})
export class AppModule {}
