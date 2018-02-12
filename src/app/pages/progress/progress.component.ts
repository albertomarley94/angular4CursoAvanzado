import { Component, OnInit , Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit {
  porcent:number = 20;
  porcent2:number = 50;
  constructor() { }

  ngOnInit() {
  }
  
  onChange(newValue:number, type:string){
    if(type=="test1"){
      this.porcent=newValue;
    }
    if(type=="test2"){
      this.porcent2=newValue;
    }
  }

}
