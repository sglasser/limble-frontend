import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IWorkerCost } from '../interfaces/worker-cost.interface';
import { ILocationCost } from '../interfaces/location-cost.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = environment.BASE_API_URL;

  constructor(private readonly http: HttpClient) {}

  getWorkerCost(): Observable<IWorkerCost[]> {
    return this.http.get<IWorkerCost[]>(`${this.API_URL}/workers/cost`);
  }

  getLocationCost(): Observable<ILocationCost> {
    return this.http.get<ILocationCost>(`${this.API_URL}/locations/cost`);
  }
}
