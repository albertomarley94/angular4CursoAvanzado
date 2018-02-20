import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  Ajustes:ajustes={
    temaUrl: "./assets/css/colors/default.css",
    tema: "default"
  }
  constructor(
    @Inject(DOCUMENT) private _document
  ) { }
  
  guardarAjustes(temaUrl,tema){
    this.Ajustes={
      temaUrl,
      tema
    }
    localStorage.setItem('Ajustes',JSON.stringify(this.Ajustes));
    this.cargarAjustes();
  }

  cargarAjustes(){
    if(localStorage.getItem('Ajustes')){
      this.Ajustes = JSON.parse(localStorage.getItem('Ajustes'));
      this._document.getElementById('theme').setAttribute('href',this.Ajustes.temaUrl);
    }
  }
}

interface ajustes{
  temaUrl:string,
  tema:string
}
