import { Component, Input, Output } from '@angular/core';
import { ChartData,  ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() title :string ='Sin titulo';

// Doughnut
@Output('labels') doughnutChartLabels: string[] = [
  'Label1',
  'Label 2',
  'Label 3',
];

@Input('data') doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { 
      data: [350, 450, 100], 
      backgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBorderColor:['#000000','#000000','#00000003']
    },
  ]
};

public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({
  event,
  active,
}: {
  event: MouseEvent;
  active: {}[];
}): void {
  console.log(event, active);
}

public chartHovered({
  event,
  active,
}: {
  event: MouseEvent;
  active: {}[];
}): void {
  console.log(event, active);
}
}
