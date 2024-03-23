import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { IChartData } from '../../interfaces/chart-data.interface';

@Component({
  selector: 'app-chart-component',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  @Input()
  set data(data: IChartData[] | undefined) {
    if (data) {
      this.createChart(data);
    }
  }

  chart: any;

  createChart(displayData: IChartData[]){

    this.chart = new Chart("pie-chart", {
      type: 'pie',
      data: {// values on X-Axis
        labels: displayData?.map((d: any) => d.name),
        datasets: [{
          label: 'Total Cost',
          data: displayData?.map((d: any) => d.value),
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}
