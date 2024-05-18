import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../../../auth-services/storage-service/storage.service";
import {Observable} from "rxjs";

const BASIC_URL = ["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllCategories(): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+"/api/customer/categories",
      {
        headers:this.createAuthorizationHeader()
      })
  }
  getCategoriesByName(title:string): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/customer/categories/${title}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  //Products Operations
  getProductsByCategory(categoryId:number): Observable<any> {
    return  this.httpClient.get<[]>(BASIC_URL+`/api/customer/${categoryId}/products`,
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

  addToCart(productId:any):Observable<any>{
    const cartDto= {
      productId:productId,
      userId:StorageService.getUserId()
    }
    return  this.httpClient.post(BASIC_URL+`/api/customer/cart`,cartDto,
      {
        headers:this.createAuthorizationHeader()
      })
  }

  getCartByUserId():Observable<any>{
     const userId = StorageService.getUserId()
    return  this.httpClient.get<[]>(BASIC_URL+`/api/customer/cart/${userId}`,
      {
        headers:this.createAuthorizationHeader()
      })
  }


}
