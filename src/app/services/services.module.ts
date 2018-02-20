import { NgModule } from '@angular/core';
import { SettingsService } from './settings/settings.index';
import { SharedService , SidebarService } from './shared/shared.index';

@NgModule({
  imports: [
    
  ],
  declarations: [

  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ]
})
export class ServicesModule { }
