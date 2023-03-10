import { Component } from '@angular/core';
import { ChartData,  ChartType } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1:string[]=['Pan','Refresco','Tacos']
  // public data1=[[10,450,100],];

  
public data1: ChartData<'doughnut'> = {
  labels: this.labels1,
  datasets: [
    { 
      data: [350, 450, 100], 
      backgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBorderColor:['#000000','#000000','#00000003']
    },
  ]
};
}