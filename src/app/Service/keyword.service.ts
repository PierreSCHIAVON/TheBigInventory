import { Injectable } from '@angular/core';
import { Keyword } from '../Models/keyword.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
  keyword : Keyword | undefined 
  name : string ='';
  private apiUrl = 'http://localhost:8080/api/keyword';
  constructor(private http: HttpClient) { }

  createKeyword(keywordData: { name: string }): Observable<Keyword> {
    return this.http.post<Keyword>(`${this.apiUrl}`, keywordData);
  }

  getKeywordById(id: number): Observable<Keyword> {
    return this.http.get<Keyword>(`${this.apiUrl}/${id}`);
  }

  getAllKeywords(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(`${this.apiUrl}`);
  }

  updateKeyword(keyword: Keyword): Observable<Keyword> {
    return this.http.put<Keyword>(`${this.apiUrl}`, keyword);
  }  
  
  deleteKeyword(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
