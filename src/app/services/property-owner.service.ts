import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyOwner } from '../shared/model/property-owner';

@Injectable({
  providedIn: 'root'
})
export class PropertyOwnerService {
  
  private baseUrl = 'http://localhost:8080/api/propertyOwners';
  private apiUrl = 'http://localhost:8080/api/propertyOwners/vat/132156888';

  constructor(private http: HttpClient) {}

  createOwner(owner: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, owner);
  }

  getAllPropertyOwners(){
    let url = "http://localhost:8080/api/propertyOwners";
    return this.http.get<PropertyOwner[]>(url);
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
