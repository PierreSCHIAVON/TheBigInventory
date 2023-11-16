import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paint } from '../Models/paint.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintService {

  constructor(private http : HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/paint';

  createPaint(paintData: { name: string }): Observable<Paint> {
    return this.http.post<Paint>(`${this.apiUrl}`, paintData);
  }

  getPaintById(id: number): Observable<Paint> {
    return this.http.get<Paint>(`${this.apiUrl}/${id}`);
  }

  getAllPaints(): Observable<Paint[]> {
    return this.http.get<Paint[]>(`${this.apiUrl}`);
  } 

  updatePaint(paint: Paint): Observable<Paint> {
    return this.http.put<Paint>(`${this.apiUrl}`, paint);
  }  
  
  deletePaint(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
