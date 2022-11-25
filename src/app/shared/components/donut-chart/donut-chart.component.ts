import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  @Input() abv!: number;
  @Input() ibu!: number;
  @Input() ph!: number;
  @Input() ebc!: number;

  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['ABV', 'IBU', 'PH' , 'EBC'],
        datasets: [
          {
            label: "Composition",
            data: [this.abv, this.ibu, this.ph, this.ebc],
            backgroundColor: '#548b2f',
            borderWidth: 1,
            borderRadius: 20,
            barPercentage: 0.25,
            categoryPercentage: 0.5,
          },
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          },
          x: {
            beginAtZero: true,
          }
        },
      }
    });
  }
}
