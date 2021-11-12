import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
  @Input() locationdata: any;
  @Input() selectedWeek: any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Define chart options
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        id: "y-axis-1",
        position: 'left',
        type: 'linear',
        ticks: { min: 0, max: 500 }
      }]
    },
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  locationData: any;
  barChartData: any[] = [{ data: [] }];
  

  ngOnInit() {
    this.setChartData();
  }

  setChartData() {
    this.barChartLabels = this.locationdata.map((loc: { locationName: any; }) => (loc.locationName));
    this.barChartData = this.locationdata.map((loc: { discrepancy: any; }) => ({ data: loc.discrepancy }));
  }

  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.selectedWeek) {
      this.barChartData[0].data[2] = 121;
      this.barChartData[0].data[3] = 221;
      this.barChartData[0].data[4] = 21;
      this.chart?.update();
    }
  }

  // Define colors of chart segments
  barChartColors: Color[] = [
    {
      backgroundColor: '#466C8F',

    }
  ];
}
