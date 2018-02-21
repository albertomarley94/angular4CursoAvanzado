import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.sass']
})
export class PromesasComponent implements OnInit {

  constructor() { 
    let promise = new Promise((resolve,reject)=>{
      let contador = 0;
      let interval = setInterval(()=>{
        contador++;
        if(contador==3){
          resolve();
          clearInterval(interval);
        }
        console.log(contador);
      },1000);
    });

    promise.then(
      ()=>console.log("Termino"),
    ).catch(
      ()=>console.log("Error")
    );
  }

  ngOnInit() {
    
  }

}
