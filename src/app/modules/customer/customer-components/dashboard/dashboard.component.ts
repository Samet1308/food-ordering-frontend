
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzButtonSize} from "ng-zorro-antd/button";
import {CustomerService} from "../../customer-service/customer.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Component} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  categories: any=[];
  isSpinning:boolean;
  size: NzButtonSize = 'large';
  validateForm:FormGroup;
  constructor(
    private customerService:CustomerService,
    private formBuilder:FormBuilder,
    private message:NzMessageService,
    ) {
  }

  ngOnInit(){
    this.validateForm = this.formBuilder.group({
      title: [null, [Validators.required]]
    });
    this.getAllCategories();
    this.validateForm.get(['title'])!.valueChanges.subscribe(() => {
      this.onSearchInputChange();
    });
  }


  onSearchInputChange() {
    const title = this.validateForm.get(['title'])!.value;
    if (!title) {
      this.getAllCategories();
    }
  }

  searchCategory(){
    this.categories=[]
    this.customerService.getCategoriesByName(this.validateForm.get(['title'])!.value).subscribe((res)=> {
      console.log(res)
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.categories.push(element)
      });
    })
  }

  getAllCategories(){
    this.categories=[]
    this.customerService.getAllCategories().subscribe((res)=>{
      res.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.categories.push(element)
      })
    })
  }



}
