import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
//COMPONENTS
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [     
        DashboardComponent,
        PagesComponent
    ],
    imports: [ 
        SharedModule,
        PAGES_ROUTES 
    ],
    exports:    [ 
        DashboardComponent,
        PagesComponent
    ]
})
export class PagesModule { }