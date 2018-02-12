import { Component, Input, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input('title') title:string="Titulo";
  @Input('porcent') porcent:number = 20;
  @Output() onChange = new EventEmitter<number>();

  @ViewChild('txtProgress') txtProgress: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  
  variar(tipo:string){
    if(tipo=="aumentar"){
      this.porcent += 10;
      if(this.porcent>100){
        this.porcent = 100;
      }
    }
    if(tipo=="quitar"){
      this.porcent -= 10;
      if(this.porcent<=0){
        this.porcent = 1;
      }
    }
    this.txtProgress.nativeElement.focus();
    this.onChange.emit(this.porcent);
  }
  
  cambioNumero(newValue:number){

    if(newValue>100){
      this.porcent=100;
    }
    else if(newValue<=0){
      this.porcent=1;
    }

    this.txtProgress.nativeElement.value = this.porcent;

    this.onChange.emit(this.porcent);
  }
}
