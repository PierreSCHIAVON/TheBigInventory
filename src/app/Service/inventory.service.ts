import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from '../Models/inventory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient){}
  private apiUrl = 'http://localhost:8080/api/inventory';

  createInventory(inventoryData: { name: string }): Observable<Inventory> {
    return this.http.post<Inventory>(`${this.apiUrl}`, inventoryData);
  }

  getInventoryById(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.apiUrl}/${id}`);
  }

  getAllInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiUrl}`);
  } 

  updateInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.apiUrl}`, inventory);
  }  
  
  deleteInventory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
