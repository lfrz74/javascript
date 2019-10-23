import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Referencias agregadas
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatIconModule,
  MatCheckboxModule } from '@angular/material';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from  'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Referencias agregadas
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './routes/routing';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';
import { NuevaFotografiaComponent } from './components/nueva-fotografia/nueva-fotografia.component';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista.component';
import { EditarFotografiaComponent } from './components/editar-fotografia/editar-fotografia.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ListComponent,
    NuevaFotografiaComponent,
    EmpleadoListaComponent,
    EditarFotografiaComponent,
    FotografiaComponent
    
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
    MatCheckboxModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        timeOut: 1000,
        positionClass: 'toast-bottom-right'
      })      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
