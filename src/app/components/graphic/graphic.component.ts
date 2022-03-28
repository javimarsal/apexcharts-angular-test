import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})

export class GraphicComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = new ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {}

  ngOnInit(): void {
    this.initGraph()
  }

  initGraph() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: 'category A',
              y: 10
            },
            {
              x: 'category B',
              y: 18
            },
            {
              x: 'category C',
              y: 13
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: 'bar'
      },
      title: {
        text: 'My First Angular Chart'
      }
    };
  }

}
