import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl= 'http://localhost:4000/employees'
  constructor(private http: HttpClient) { }

getEmployees(){
 return this.http.get<Employee[]>(`${this.apiUrl}`);
}
addEmployee(userInfo: Employee){
  return this.http.post(`${this.apiUrl}/addEmployee`,userInfo);
}
}
