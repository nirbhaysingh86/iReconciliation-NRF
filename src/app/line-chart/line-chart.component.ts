// line-chart.component.ts
import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [600000, 499000, 398000, 597000, 196000, 495000, 94000, 43000, 92000, 91000, 90000, 89000, 85000, 87000, 482000, 379000], label: 'Discrepancy' },
    { data: [1000, 554565, 456, 3567, 9566, 789, 678, 890, 242, 280, 281, 356, 454355, 640, 678, 879], label: 'Value' },
    { data: [56638, 455448, 171440, 344479, 343486, 445447, 90, 65, 59, 80, 81, 454356, 55, 40, 89, 67], label: 'Poly.(Value)', borderDash: [10, 5] }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['W01', 'W02', 'W03', 'W04', 'W05', 'W06', 'W07', 'W08', 'W00', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15', 'W16'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { //you're missing this
      yAxes: [{
        id: "y-axis-1",
        position: 'left',
        type: 'linear',
        ticks: { min: 0 }
      },
        {
          id: "y-axis-2",
          position: 'right',
          ticks: { min: 0, max: 10000 }
      }]
    }
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType: any = 'line';

  lineChartPlugins = [];



}
