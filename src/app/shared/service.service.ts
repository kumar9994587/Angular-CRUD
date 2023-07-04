import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // <--url from json server-->
  // URL: any = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  // create Data
  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', data)
  }

  // Fetch Data 
  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:3000/employees')
  }

  // Delete Data 
  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`)
  }

  //Update data
  updateEmployee(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data)
  }

}
