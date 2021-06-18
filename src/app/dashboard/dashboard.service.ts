import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/Stock.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "https://santander-bootcamp-stock-api.herokuapp.com/bootcamp";

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseURL}/stock`).toPromise();
  }

}
