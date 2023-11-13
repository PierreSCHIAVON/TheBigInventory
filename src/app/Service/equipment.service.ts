import { Injectable } from '@angular/core';
import { Equipment } from '../Models/equipment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  equipment : Equipment | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/equipment';

  constructor(private http: HttpClient) { }

  createEquipment(equipmentData: { name: string ;points: number }): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}`, equipmentData);
  }

  getEquipmentById(id: number): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/${id}`);
  }

  getAllEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}`);
  } 

  updateEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}`, equipment);
  }  
  
  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
