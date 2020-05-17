import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as HighCharts from 'highcharts';
import {ChartObject} from 'highcharts';
// import * as NoDataToDisplay from 'highchart/module/'

@Component({
  selector: 'app-chart',
  templateUrl: `
  <div #chart></div>
  `,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('chart') chartElement;
  @Input() chartConfig: HighCharts.Options;

  constructor() { }

  ngOnInit() {
  }

}
