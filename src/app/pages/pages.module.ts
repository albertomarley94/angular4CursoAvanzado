import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
//COMPONENTS
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from '../commons/incrementador/incrementador.component';
import { GraficasComponent } from './graficas/graficas.component';
import { GraficaDonutComponent } from '../commons/grafica-donut/grafica-donut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [     
        DashboardComponent,
        PagesComponent,
        ProgressComponent,
        IncrementadorComponent,
        GraficasComponent,
        GraficaDonutComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    imports: [ 
        BrowserModule,
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES 
    ],
    exports:    [ 
        DashboardComponent,
        PagesComponent
    ]
})
export class PagesModule { }