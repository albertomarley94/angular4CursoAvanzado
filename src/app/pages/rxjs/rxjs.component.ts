import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass']
})
export class RxjsComponent{
  subscription:Subscription;
  constructor() { 
    //-AQUI PARA QUE NO FALLE AL SEGUNDO INTENTO
    

    this.subscription = 
      this.observableCheck().subscribe((data)=>{
        console.log(data);
      },error=>{
        console.log("Error en el observable "+error);
      },()=>{
        console.log("Terminado");
      });
  }

  ngOnDestroy(){
    console.log("Cerrar componente");
    this.subscription.unsubscribe();
  }

  observableCheck(){
    let contador = 0; 
    return new Observable(observer => {
      //-let contador = 1; AQUI PARA QUE INTENTE DOS VECES Y FALLE
      let intervalo= setInterval(()=>{
        contador++
        let salida={
          value : contador
        }
        observer.next(salida);
        if(contador==10){
          clearInterval(intervalo);
          observer.complete();
        }
        if(contador==3){
          clearInterval(intervalo);
          observer.error("Error");
        }
      },1000)
    })
    .retry(2)
    .map((response:any)=>{
        return response.value;
    })
    //-SIEMPRE RETORNA UN BOOLEAN
    .filter((valor):boolean=>{
        if(valor%2==0){
          return true;
        }
        else{
          return false;
        } 
    });
  }

}
