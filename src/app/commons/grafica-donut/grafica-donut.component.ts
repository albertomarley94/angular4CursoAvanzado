import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styleUrls: ['./grafica-donut.component.sass']
})
export class GraficaDonutComponent implements OnInit {
  
  @Input('labels') doughnutChartLabels:any[]= [];
  @Input('data') doughnutChartData:any[] = [];
  @Input('type') doughnutChartType:string = '';
  @Input('leyenda') leyenda:string = '';
  constructor() {
   }

  ngOnInit() {
  }

  chartHovered(e){
    console.log("Hola");
  }

  chartClicked(e){
    console.log(e);
  }
}
