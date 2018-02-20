import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.sass']
})
export class AccountSettingsComponent implements OnInit {
  constructor( 
    @Inject(DOCUMENT) private _document,
    private settings:SettingsService
  ) { }

  ngOnInit() {
    //Iniciamos tema y añadimos check
    this.applyCheck(this.settings.Ajustes.tema);
  }

  cambiarColor(color:string){
    this.settings.guardarAjustes('./assets/css/colors/'+color+'.css',color);
    this.applyCheck(color);
  }

  applyCheck(color:any){
    let selectores:any = document.getElementsByClassName('selector');
    for(let select of selectores){
      if(select.dataset.theme==color){
        select.classList.add('working');
      }else{
        select.classList.remove('working');
      }
      
    }
  }
}
