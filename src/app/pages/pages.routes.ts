import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent , data:{title: "Dashboard"}},
            { path: 'progress', component: ProgressComponent, data:{title: "Progress Bar"} },
            { path: 'graficas1', component: GraficasComponent, data:{title: "Gráficas"} },
            { path: 'account-settings', component: AccountSettingsComponent, data:{title: "Ajustes de Tema"} },
            { path: 'promesas', component: PromesasComponent, data:{title: "Promesas"} },
            { path: 'rxjs', component: RxjsComponent, data:{title: "Rxjs"} },
            { path:'', redirectTo : '/dashboard', pathMatch : 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(routes);