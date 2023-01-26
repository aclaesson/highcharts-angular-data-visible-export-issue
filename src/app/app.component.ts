import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import OfflineExporting from 'highcharts/modules/offline-exporting';
import ExportData from 'highcharts/modules/export-data';
import HighchartsMore from 'highcharts/highcharts-more';

Exporting(Highcharts);
OfflineExporting(Highcharts);
ExportData(Highcharts);
HighchartsMore(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chart: Highcharts.Chart;
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: [
          { y: 1, visible: true } as Highcharts.PointOptionsObject,
          { y: 3, visible: true } as Highcharts.PointOptionsObject,
          { y: 2, visible: true } as Highcharts.PointOptionsObject,
        ],
      },
    ],
  };

  logChartInstance(chart) {
    this.chart = chart;
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    // this.chart = chart;
  };

  changeVisibleNotWorking() {
    this.chart.series[0].data[1].visible = false;
    this.chart.series[0].show();
  }

  changeVisibleWorking() {
    this.chart.series[0].data[1].update(
      { visible: false } as Highcharts.PointOptionsType,
      false
    );
    this.chart.redraw();
  }

  export(exportType) {
    console.log(exportType);
    this.chart.exportChart(
      {
        type: exportType,
      },
      {}
    );
  }
}
