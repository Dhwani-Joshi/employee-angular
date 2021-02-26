import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private data: EmployeeService) { }
    employee: Employee[]=[];
  ngOnInit() {
    this.getEmployees();
    // this.addEmployee()
  }
  getEmployees() {
    this.data.getEmployees().subscribe(result => {
      this.employee = result
      console.log(this.employee,'employee')
      console.log(result, 'all data');
    })
  }
  // addEmployee(){
  //   this.data.addEmployee(this.employee).subscribe(result=>{
  //       result = this.employee;
  //       console.log('added');
  //   })
  // }
}
