import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SorterComponent } from './sorter/sorter.component';
import { ElementComponent } from './element/element.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SorterComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    MatSliderModule,
    FormsModule,MatButtonModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
