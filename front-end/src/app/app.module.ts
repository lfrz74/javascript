import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Referencias agregadas
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Referencias agregadas
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './routes/routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
