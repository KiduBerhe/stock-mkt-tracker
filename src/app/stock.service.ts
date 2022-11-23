import { Injectable } from '@angular/core';
import { HttpClient } from ''
import { Observable } from 'rxjs';
import { CompamyStock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiServerUrl = '';


  constructor(private http: HttpClient) { }

  public getCompanyStock(): Observable<CompanyStock[]>{
    return this.http.get<CompamyStock>(`${this.apiServerUrl}/`)
  }

}
