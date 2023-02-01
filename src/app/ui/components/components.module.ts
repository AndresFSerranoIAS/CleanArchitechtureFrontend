import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { PostCreateUserUseCase } from 'src/app/domain/usecases/user/user.usecase';
import { UserService } from 'src/app/infrastructure/driven-adapter/user/user.service';
import { PageModule } from '../pages/page.module';
import { AppModule } from 'src/app/app.module';
import { FormComponent } from './form/form.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from 'src/app/domain/domain.module';


const userCreaterUseCaseFactory = (userGateway : CreateUserGateway) => new PostCreateUserUseCase(userGateway);
export const userCreateUseCaseProvider ={
  provide : CreateUserGateway,
  useFactory: userCreaterUseCaseFactory,
  deps: [CreateUserGateway],
}

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule
  ],
  providers: [userCreateUseCaseProvider,
    {provide : CreateUserGateway,useClass : UserService},],
  exports: [FormComponent],
})
export class ComponentsModule { }
