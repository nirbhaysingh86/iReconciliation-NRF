import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  @Input() departmentsdata: any;
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {
     
  }
  ngOnInit() {

    this.pieChartLabels = this.departmentsdata.map((dep: { departmentName: any; }) => (dep.departmentName));
    this.pieChartData = this.departmentsdata.map((dep: { discrepancy: any; }) => (dep.discrepancy));
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        //label: function (tooltipItems, data) {
        //  return data.datasets[0].data[tooltipItems.index] + ' %';
        //}
      }
    }
  };
  

  

}
