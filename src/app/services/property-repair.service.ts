import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyrepairService {
  private baseUrl = 'http://localhost:8080/propertyrepairs'; // προσαρμοζω τη βάση URL

  constructor(private http: HttpClient) { }

  createRepair(repair: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, repair);
  }

  getRepairs(criteria: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`, { params: criteria });
  }

  getRepairById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateRepair(id: string, repair: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, repair);
  }

  deleteRepair(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

