import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ListComponent } from '../components/list/list.component';
import { GuardService } from '../services/guard.service';

const app_routes : Routes = [
    { path: 'home',  component:HomeComponent },
    { path: 'admin', component:AdminComponent, canActivate:[GuardService],
        children:[
            {path: 'list', component:ListComponent}
        ]
    },
    { path: 'login', component:LoginComponent},
    //Todas la rutas q escribamos deben coincidir en su totalidad, sino se redirecciona a ''
    { path: '**', pathMatch: 'full', redirectTo:''} 
]

export const AppRouting =  RouterModule.forRoot(app_routes);