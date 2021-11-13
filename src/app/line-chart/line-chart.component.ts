// line-chart.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @Output() getWeekData = new EventEmitter<any>();
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [550000, 539000, 528000, 517000, 496000, 495000, 494000, 343000, 392000, 391000, 390000, 389000, 285000, 287000, 282000, 379000], label: 'Discrepancy' },
    { data: [350000, 439000, 428000, 417000, 396000, 395000, 394000, 243000, 292000, 291000, 290000, 289000, 185000, 187000, 182000, 279000], label: 'Value' },
    { data: [450000, 339000, 328000, 317000, 396000, 395000, 394000, 243000, 282000, 281000, 270000, 269000, 195000, 177000, 192000, 269000], label: 'Poly.(Value)' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['W01', 'W02', 'W03', 'W04', 'W05', 'W06', 'W07', 'W08', 'W09', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15', 'W16'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        id: "y-axis-1",
        position: 'left',
        type: 'linear',
        ticks: {
          min: 0, max: 600000,
          fontStyle: "bold",
          callback: function (label: any) {
            return '$' + label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        },
        scaleLabel: {
          display: true,
          fontStyle: 'bold',
        }, gridLines: {
           display:true
        }
      },
      {
        id: "y-axis-2",
        position: 'right',
        ticks: { min: 0, max: 90000, fontStyle: "bold", }, gridLines: {
          display: false,
          zeroLineColor: 'white',
          color: 'transparent'
        }
        }],
      xAxes: [{
          gridLines: {
          display: false,
          zeroLineColor: 'white',
          color: 'transparent'
        }
      }]
    },

    legend: {
      position: 'top',
      align: 'end',
      labels: {
        fontColor: 'black', // legend color (can be hexadecimal too)
      }
    },
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          
          return label;
        },

      },
    },
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

  chartClicked(evt: any) {
    if (evt.active.length > 0) {
      var elementIndex = evt.active[0]._index;
      let week = this.lineChartLabels[elementIndex];
      this.getWeekData.emit(week);
      //activeElements[0].datasets[0].pointBackgroundColor[elementIndex] = 'white';
    }
    console.log('Clicked!');
  }

}
