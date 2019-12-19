import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../model/department.model";
@Component({
  selector: "app-create-employees",
  templateUrl: "./create-employees.component.html",
  styleUrls: ["./create-employees.component.css"]
})
export class CreateEmployeesComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" }
  ];
  constructor() {}

  ngOnInit() {}
  onSubmit(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
