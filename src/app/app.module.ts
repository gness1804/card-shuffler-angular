import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardComponent } from './card/card.component';
// import { SpadesComponent } from './spades/spades.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
