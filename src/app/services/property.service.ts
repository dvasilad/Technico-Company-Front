import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../shared/model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {private baseUrl = 'http://localhost:8080/properties';

constructor(private http: HttpClient) {}

createProperty(property: any): Observable<any> {
  return this.http.post(`${this.baseUrl}`, property);
}

getAllProperties(){
  let url = "http://localhost:8080/api/properties";
  return this.http.get<Property[]>(url);
}

searchProperties(criteria: any): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}`, { params: criteria });
}

getPropertyById(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}

updateProperty(id: string, property: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, property);
}

deleteProperty(id: string): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}
}

