import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
