import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(
    private adminService:AdminService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.getAllCategories()
  }
  getAllCategories(){
    this.adminService.getAllCategories().subscribe((res)=>{
      console.log(res)
    })
  }
}
