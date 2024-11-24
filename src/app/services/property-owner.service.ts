import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyOwnerService {
  
  private baseUrl = 'http://localhost:8080/api/propertyowner/create';
  private apiUrl = 'http://localhost:8080/api/propertyowner/132156888';

  constructor(private http: HttpClient) {}

  createOwner(owner: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, owner);
  }

  searchByVat(vat: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/vat/${vat}`);
  }


  // Λήψη ενός χρήστη από το ID του
  getPropertyOwnerById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Ενημέρωση των δεδομένων του χρήστη
  updatePropertyOwner(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePropertyOwner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
