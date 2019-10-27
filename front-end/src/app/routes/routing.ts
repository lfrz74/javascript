import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ListComponent } from '../components/list/list.component';
import { GuardService } from '../services/guard.service';
import { NuevaFotografiaComponent } from '../components/nueva-fotografia/nueva-fotografia.component';
import { EmpleadoListaComponent } from '../components/empleado-lista/empleado-lista.component';
import { EditarFotografiaComponent } from '../components/editar-fotografia/editar-fotografia.component';

const app_routes : Routes = [
    { path: 'home/:id',  component:HomeComponent },
    { path: 'admin', component:AdminComponent, canActivate:[GuardService],
        children:[
            {path: 'list', component:ListComponent},
            {path: 'new',  component:NuevaFotografiaComponent},
            {path: 'empleado-lista',  component: EmpleadoListaComponent},
            {path: 'editar/:id',  component: EditarFotografiaComponent}
        ]
    },
    { path: 'login', component:LoginComponent},
    //Todas la rutas q escribamos deben coincidir en su totalidad, sino se redirecciona a ''
    { path: '**', pathMatch: 'full', redirectTo:'home/1'} 
]

export const AppRouting =  RouterModule.forRoot(app_routes);