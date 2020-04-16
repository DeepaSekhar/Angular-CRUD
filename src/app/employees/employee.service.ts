import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: "sara",
      gender: "female",
      age: 25,
      email: "sara@gmail.com",
      phone: 65666556,
      department: "IT",
      isactive: true,
      photopath: "assets/images/kitten1.jpeg"
    },
    {
      id: 2,
      name: "john",
      gender: "male",
      age: 20,
      email: "john@gmail.com",
      phone: 68787666556,
      department: "financial",
      isactive: true,
      photopath: "assets/images/kitten2.jpeg"
    },
    {
      id: 3,
      name: "zoe",
      gender: "female",
      age: 30,
      email: "zoe@gmail.com",
      phone: 65765656,
      department: "HR",
      isactive: true,
      photopath: "assets/images/kitten3.jpeg"
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }
  // getEmployeeById(id:number){
  //   const employee = this.listEmployees.find(employee => employee.id === id)
  //   return employee
  // }

  save(employee: Employee) {
    const person = {
      ...employee,
      id: this.listEmployees.length + 1
    };

    this.listEmployees.push(person);
    console.log("listEmployees", this.listEmployees);
  }
  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex(e => e.id === id);
    {
      if (i != -1) {
        this.listEmployees.splice(i, 1);
      }
    }
  }
}
