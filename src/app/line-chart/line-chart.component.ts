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
    { data: [600000, 559000, 548000, 537000, 496000, 495000, 494000, 543000, 492000, 491000, 490000, 489000, 485000, 487000, 482000, 379000], label: 'Discrepancy' },
    { data: [441000, 554565, 456, 3567, 9566, 433789, 454678, 455890, 45242, 455280, 455281, 345456, 454355, 640, 678, 879], label: 'Value' },
    { data: [556638, 455448, 171440, 344479, 343486, 445447, 45590, 56665, 66659, 6680, 81, 454356, 55, 40, 89, 67], label: 'Poly.(Value)'}
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

    {  
      backgroundColor: '#E1CCF0',
      borderColor: '#E1CCF0',
    },
    {  
      backgroundColor: '#FFFFFF',
      borderColor: '#ED7D31',
    },
    {
      borderDash: [10, 5], borderColor: '#4472C4', backgroundColor: '#FFFFFF'
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType: any = 'line';

  lineChartPlugins = [];



}
