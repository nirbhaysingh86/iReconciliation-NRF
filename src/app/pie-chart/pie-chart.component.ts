import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  @Input() departmentdata: any;
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
     
  }

  ngOnInit() {

    this.pieChartLabels = this.departmentdata.map((dep: { departmentName: any; }) => (dep.departmentName));
    this.pieChartData = this.departmentdata.map((dep: { discrepancy: any; }) => (dep.discrepancy));
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    tooltips: {
      enabled: true,
       
      callbacks: {
        //label: function (tooltipItems, data) {
        //  return data.datasets[0].data[tooltipItems.index] + ' %';
        //}
      }
    }
  };
  // Define colors of chart segments
  pieChartColors: Color[] = [
    {
      backgroundColor: ['#5B9BD5', '#ED7D31', '#A5A5A5', '#FFC000','#4472C4'],
    }
  ];
}
