import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
