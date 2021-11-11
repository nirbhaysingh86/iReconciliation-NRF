import { Component, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent {
  @Input() locationdata: any;
  @Input() header: any;

  ngOnInit() {
    this.locationdata;
    if (this.header == "Ratio of affected deps") {
      Chart.plugins.register({
        beforeDraw: function (chart:any) {
          var data = chart.data.datasets[0].data;
          var sum = data.reduce(function (a:any, b:any) {
            return a + b;
          }, 0);
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
          ctx.restore();
          var fontSize = (height / 10).toFixed(2);
          ctx.font = fontSize + "px Arial";
          ctx.textBaseline = "middle";
          var text = sum,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      });
    }
  }
  doughnutChartLabels: Label[] = ["International","Domestic"];
  doughnutChartData: MultiDataSet = [
    [55, 25]
  ];
  doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: any = {
    borderWidth: 2,
    maintainAspectRatio: true,
    cutoutPercentage: 55,
    centerText:true
     
  }
  
  public doughnutChartLegend: boolean = false;
   
}
