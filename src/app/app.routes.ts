import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';

const appRoutes: Routes = [
    { 
    path: '', 
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: DashboardComponent },
        { path: 'graficas1', component: DashboardComponent },
        { path:'', redirectTo : '/dashboard', pathMatch : 'full'}
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});