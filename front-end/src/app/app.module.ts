import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Referencias agregadas
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatIconModule } from '@angular/material';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Referencias agregadas
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './routes/routing';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
