import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
  @Input() locationdata: any;

   // Define chart options
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {  
      yAxes: [{
        id: "y-axis-1",
        position: 'left',
        type: 'linear',
        ticks: { min: 0, max: 500 }
      } ]
    },
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  locationData: any;
  barChartData: ChartDataSets[] = [{ data: [] }];

  ngOnInit() {
    this.barChartLabels = this.locationdata.map((loc: { locationName: any; }) => (loc.locationName));
    this.barChartData = this.locationdata.map((loc: { discrepancy: any; }) => ({ data: loc.discrepancy }));
  }
 
   
  // Define colors of chart segments
  barChartColors: Color[] = [
    {
      backgroundColor: '#466C8F',
      
    }
  ];
}
