import { Injectable } from '@angular/core';
import { Unit_Type } from '../Models/unit_type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitTypeService {

  unit_type : Unit_Type | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/unit_type';

  constructor(private http: HttpClient) { }

  createUnitType(unitTypeData: { name: string }): Observable<Unit_Type> {
    return this.http.post<Unit_Type>(`${this.apiUrl}`, unitTypeData);
  }

  getUnitTypeById(id: number): Observable<Unit_Type> {
    return this.http.get<Unit_Type>(`${this.apiUrl}/${id}`);
  }

  getAllUnitTypes(): Observable<Unit_Type[]> {
    return this.http.get<Unit_Type[]>(`${this.apiUrl}`);
  }

  updateUnitType(unitType: Unit_Type): Observable<Unit_Type> {
    return this.http.put<Unit_Type>(`${this.apiUrl}`, unitType);
  }  
  
  deleteUnitType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
