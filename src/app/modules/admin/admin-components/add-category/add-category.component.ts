import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryForm: FormGroup
  selectedFile : File | null;
  imagePreview: string|ArrayBuffer|null

  constructor(
    private adminService:AdminService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.categoryForm = this.formBuilder.group(
      {
        name:[null,Validators.required],
        description:[null,Validators.required]
      }
    )
  }

  postCategory(){
    console.log(this.categoryForm.value)
    const formData :FormData=new FormData()
    formData.append("img",this.selectedFile)
    formData.append("name",this.categoryForm.get("name").value)
    formData.append("description",this.categoryForm.get("description").value)
    this.adminService.postCategory(formData).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
  onFileSelected(event:any){
    this.selectedFile=event.target.files[0]
    this.previewImage()
  }
  previewImage(){
    const reader = new FileReader()
    reader.onload=() =>{
      this.imagePreview =reader.result
    }
    reader.readAsDataURL(this.selectedFile)
  }
}
