import { Injectable } from '@angular/core';
import { Soldier } from '../Models/soldier.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoldierService {

  soldier : Soldier | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/soldier';

  constructor(private http: HttpClient) { }

  createSoldier(soldierData: { name: string ;points: number }): Observable<Soldier> {
    return this.http.post<Soldier>(`${this.apiUrl}`, soldierData);
  }

  getSoldierById(id: number): Observable<Soldier> {
    return this.http.get<Soldier>(`${this.apiUrl}/${id}`);
  }

  getAllSoldiers(): Observable<Soldier[]> {
    return this.http.get<Soldier[]>(`${this.apiUrl}`);
  } 

  updateSoldier(soldier: Soldier): Observable<Soldier> {
    return this.http.put<Soldier>(`${this.apiUrl}`, soldier);
  }  
  
  deleteSoldier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
