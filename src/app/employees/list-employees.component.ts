import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee.model";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employeeList: Employee[] = [
    {
      id: 1,
      name: "sara",
      gender: "female",
      Age: 25,
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
      Age: 20,
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
      Age: 30,
      email: "zoe@gmail.com",
      phone: 65765656,
      department: "HR",
      isactive: true,
      photopath: "assets/images/kitten3.jpeg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
