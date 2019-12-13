import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { CreateEmployeesComponent } from "./employees/create-employees.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "list",
    component: ListEmployeesComponent
  },
  {
    path: "create",
    component: CreateEmployeesComponent
  },
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
