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
        ticks: { stepSize: 100,  max: 500,beginAtZero:true },gridLines: {
          zeroLineColor: 'white',
          drawBorder: false,
          
        }
      }], xAxes: [{
        gridLines: {
          display: false,
          zeroLineColor: 'white',
          color: 'transparent',
            
        }
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
    this.barChartData = this.locationdata.map((loc: any) => ({ data: !this.selectedWeek ? loc.W01 : loc[this.selectedWeek] }));
  }
  //bar chart will display based on week selection
  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.selectedWeek) {
       
      if (this.barChartData.length > 0) {
        for (let i = 0; i < this.barChartData[0].data.length; i++) {
          this.barChartData[0].data[i] = this.locationdata[i][this.selectedWeek];
        }
        this.chart?.update();
      }
    }
  }

  // Define colors of chart segments
  barChartColors: Color[] = [
    {
      backgroundColor: '#466C8F',

    }
  ];
}
