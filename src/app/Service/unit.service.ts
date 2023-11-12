import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Unit} from '../Models/unit.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  unit : Unit | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/unit';

  constructor(private http: HttpClient) { }

  createUnit(unitData: { name: string }): Observable<Unit> {
    return this.http.post<Unit>(`${this.apiUrl}`, unitData);
  }

  getUnitById(id: number): Observable<Unit> {
    return this.http.get<Unit>(`${this.apiUrl}/${id}`);
  }

  getAllUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.apiUrl}`);
  }

  updateUnit(unit: Unit): Observable<Unit> {
    return this.http.put<Unit>(`${this.apiUrl}`, unit);
  }  
  
  deleteUnit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
