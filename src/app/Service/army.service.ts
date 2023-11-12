import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Army } from '../Models/army.model'; 

@Injectable({
  providedIn: 'root'
})
export class ArmyService {
  army : Army | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/army';
  constructor(private http: HttpClient) { }

  createArmy(armyData: { name: string }): Observable<Army> {
    return this.http.post<Army>(`${this.apiUrl}`, armyData);
  }

  getArmyById(id: number): Observable<Army> {
    return this.http.get<Army>(`${this.apiUrl}/${id}`);
  }

  getAllArmies(): Observable<Army[]> {
    return this.http.get<Army[]>(`${this.apiUrl}`);
  }

  updateArmy(army: Army): Observable<Army> {
    return this.http.put<Army>(`${this.apiUrl}`, army);
  }  
  
  deleteArmy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
 
}
