import { Injectable } from '@angular/core';
import { Appartenir } from '../Models/appartenir.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartenirService {

  appartenir : Appartenir | undefined 
  private apiUrl = 'http://localhost:8080/api/appartenir';
  constructor(private http: HttpClient) { }

  createAppartenir(appartenirData: { id_unit: number; id_keyword:number }): Observable<Appartenir> {
    return this.http.post<Appartenir>(`${this.apiUrl}`, appartenirData);
  }

  getAllAppartenir(): Observable<Appartenir[]> {
    return this.http.get<Appartenir[]>(`${this.apiUrl}`);
  }

  updateAppartenir(appartenir: Appartenir): Observable<Appartenir> {
    return this.http.put<Appartenir>(`${this.apiUrl}`, appartenir);
  }  
  
  deleteAppartenir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
