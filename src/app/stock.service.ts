import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyStock } from './stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStocks(): Observable<CompanyStock[]> {
    return this.http.get<CompanyStock[]>(`${this.apiServerUrl}`);
  }
  public getStock(id: number): Observable<CompanyStock> {
    return this.http.get<CompanyStock>(`${this.apiServerUrl}/${id}`);
  }

  public addStock(stock: CompanyStock): Observable<CompanyStock> {
    return this.http.post<CompanyStock>(`${this.apiServerUrl}`, stock);
  }

  public updateStock(stock: CompanyStock): Observable<CompanyStock> {
    return this.http.put<CompanyStock>(`${this.apiServerUrl}`, stock);
  }

  public deleteStock(id: number): Observable<Object> {
    return this.http.delete(`${this.apiServerUrl}/${id}`);
  }

}



