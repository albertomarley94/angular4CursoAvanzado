import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: DashboardComponent },
            { path: 'graficas1', component: DashboardComponent },
            { path:'', redirectTo : '/dashboard', pathMatch : 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(routes);