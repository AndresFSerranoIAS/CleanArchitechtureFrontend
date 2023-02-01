import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateUserUseCase } from './usecases/user/user.usecase';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //En los providers siempre van los servicios osea los casos de uso (en el module domain)
  providers: [
    PostCreateUserUseCase,
  ]
})
export class DomainModule { }
