import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { IUserModel } from 'src/app/domain/models/user/user.models';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService extends CreateUserGateway {
  API_USERS : string = 'https://jsonplaceholder.typicode.com/users';
  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http : HttpClient)
   {super(); }

   createUser(params :any) : Observable<any>{
    return this.http.post<any>(  this.API_USERS , params,{headers : this.httpHeaders})
   }
}
