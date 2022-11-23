import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyStock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getStocks(): Observable<CompanyStock[]> {
    return this.http.get<CompanyStock[]>(`${this.apiBaseUrl}/stock/all`);
  }

  public addStock(stock: CompanyStock): Observable<CompanyStock> {
    return this.http.post<CompanyStock>(`${this.apiBaseUrl}/stock/add`, stock);
  }


  public updateStock(stock: CompanyStock): Observable<CompanyStock> {
    return this.http.put<CompanyStock>(`${this.apiBaseUrl}/stock/update`, stock);
  }

  public deleteStock(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/stock/delete/${id}`);
  }

}


