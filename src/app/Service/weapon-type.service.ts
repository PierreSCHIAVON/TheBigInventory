import { Injectable } from '@angular/core';
import { Weapon_Type } from '../Models/weapon_type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponTypeService {

  weapon_type : Weapon_Type | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/weapon_type';

  constructor(private http: HttpClient) { }

  createWeaponType(weaponTypeData: { name: string }): Observable<Weapon_Type> {
    return this.http.post<Weapon_Type>(`${this.apiUrl}`, weaponTypeData);
  }

  getWeaponTypeById(id: number): Observable<Weapon_Type> {
    return this.http.get<Weapon_Type>(`${this.apiUrl}/${id}`);
  }

  getAllWeaponTypes(): Observable<Weapon_Type[]> {
    return this.http.get<Weapon_Type[]>(`${this.apiUrl}`);
  }

  updateWeaponType(weaponType: Weapon_Type): Observable<Weapon_Type> {
    return this.http.put<Weapon_Type>(`${this.apiUrl}`, weaponType);
  }  
  
  deleteWeaponType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
