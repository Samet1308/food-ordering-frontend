import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "./auth-services/storage-service/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-ordering-frontend';
  isCustomerLoggedIn:boolean= StorageService.isCustomerLoggedIn()
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn()

  constructor(private router:Router) {
  }


  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.isAdminLoggedIn=StorageService.isAdminLoggedIn()
        this.isCustomerLoggedIn=StorageService.isCustomerLoggedIn()
      }
    })
  }
}
