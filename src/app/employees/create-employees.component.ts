import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../model/department.model";
import { EmployeeService } from "./employee.service";
import { Router } from "@angular/router";
import { Employee } from "../model/employee.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-employees",
  templateUrl: "./create-employees.component.html",
  styleUrls: ["./create-employees.component.css"]
})
export class CreateEmployeesComponent implements OnInit {
  photoPreview: boolean = false;

  createEmployee: Employee;
  formId: string;
  name: string;
  email: string;
  phoneNumber: number;
  emailprefer: string;
  phoneprefer: string;
  gendermale: string;
  genderfemale: string;
  isActive: boolean;
  age: number;
  department: string;
  photoPath: string;

  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" }
  ];
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {}
  saveEmployee(): void {
    this.createEmployee = {
      // id: parseInt(this.formId, 10),
      name: this.name,
      gender: this.gendermale ? "male" : "female",
      age: this.age,
      email: this.email,
      phone: this.phoneNumber,
      department: this.department,
      isactive: this.isActive,
      photopath: this.photoPath
    };
    this._employeeService.save(this.createEmployee);

    this._router.navigate(["list"]);
  }

  togglePreview() {
    this.photoPreview = !this.photoPreview;
    console.log("photoPreview", this.photoPreview);
    console.log("photoPath", this.photoPath);
  }
}
