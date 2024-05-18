import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzButtonSize} from "ng-zorro-antd/button";
import {CustomerService} from "../../customer-service/customer.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-view-products-category',
  templateUrl: './view-products-category.component.html',
  styleUrl: './view-products-category.component.css'
})
export class ViewProductsCategoryComponent {

  categoryId: number = this.activatedroute.snapshot.params["categoryId"]
  Products:any=[]
  validateForm! : FormGroup;
  isSpinning:boolean
  size: NzButtonSize = 'large';
  constructor(
    private customerService:CustomerService,
    private activatedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private router: Router) {
  }

  ngOnInit(){
    this.validateForm = this.formBuilder.group({
      title: [null, [Validators.required]]
    });
    this.getProductsByCategory();
    this.validateForm.get(['title'])!.valueChanges.subscribe(() => {
      this.onSearchInputChange();
    });
  }
  onSearchInputChange() {
    const title = this.validateForm.get(['title'])!.value;
    if (!title) {
      this.getProductsByCategory();
    }
  }

  getProductsByCategory(){
    this.Products=[];
    this.customerService.getProductsByCategory(this.categoryId).subscribe((res)=>{
      res.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.Products.push(element)
      })
    })
  }

  addToCart(id:any){
    this.customerService.addToCart(id).subscribe((res)=>{
      this.message
        .success(
          `Ürün Başarıyla Eklendi.`, {nzDuration: 5000}
        );
    })
  }

}
