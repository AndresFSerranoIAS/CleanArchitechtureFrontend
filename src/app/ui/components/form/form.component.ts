import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostCreateUserUseCase } from "../../../domain/usecases/user/user.usecase"


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit { 
  userForm: FormGroup;
  
  constructor(private formBuilder : FormBuilder, private postCreateUserUseCase : PostCreateUserUseCase) {
    this.userForm = this.formBuilder.group({
      name: ["",Validators.required],
      job: ["",Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitCreate(){
    this.validationPostCreateUser();
  }

  private validationPostCreateUser(){
  this.postCreateUserUseCase.invoke({name : this.userForm.value.name,job : this.userForm.value.job}).subscribe(result =>{
    console.log(result);
    
  })
}

}
