import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../auth-services/storage-service/storage.service";

const BASIC_URL = ["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postCategory( categoryDto: any): Observable<any> {
    return  this.httpClient.post<[]>(BASIC_URL+"/api/admin/category",categoryDto,
      {
        headers:this.createAuthorizationHeader()
      })
  }
  getAllCategories(): Observable<any> {
    return  this.httpClient.post<[]>(BASIC_URL+"/api/admin/categories",
      {
        headers:this.createAuthorizationHeader()
      })
  }
  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders()
    return authHeaders.set(
      "Authorization","Bearer" + StorageService.getToken()
    )
  }
}