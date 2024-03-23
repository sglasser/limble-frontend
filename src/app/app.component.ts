import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { ApiService } from './services/api.service';
import { first, tap, catchError, Subscription } from 'rxjs';
import { workerCostToChartData } from './utility/transformations';
import { IChartData } from './interfaces/chart-data.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'limble-frontend';
  workerCostData: IChartData[] | undefined;
  subscriptions: Subscription[] = [];

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.apiService.getWorkerCost().pipe(
        first(),
        tap((data) => {
          this.workerCostData = workerCostToChartData(data);
        }),
        catchError((error) => {
          // TODO -> display some type of error message to the user and log the error
          console.error('Error fetching worker cost:', error);
          throw error;
        })
      ).subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
