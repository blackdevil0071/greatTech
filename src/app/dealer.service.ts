import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  private apiUrl = 'https://pv.greatfuturetechno.com/pv-api/dealer/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token aa4d0b1b9b2794090b18febbd71cf2c90e0d5a83'
    })
  };

  constructor(private http: HttpClient) { }

  getDealers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error fetching dealers:', error);
          return throwError('Error fetching dealers. Please try again later.');
        })
      );
  }

  createDealer(dealer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dealer, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error creating dealer:', error);
          return throwError('Error creating dealer. Please try again later.');
        })
      );
  }
  updateDealer(dealerId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}?id=${dealerId}`;
    return this.http.put<any>(url, updatedData, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error updating dealer:', error);
          return throwError('Error updating dealer. Please try again later.');
        })
      );
  }

  deleteDealer(dealerId: number): Observable<any> {
    const url = `${this.apiUrl}?id=${dealerId}`;
    return this.http.delete<any>(url, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error deleting dealer:', error);
          return throwError('Error deleting dealer. Please try again later.');
        })
      );
  }
}
