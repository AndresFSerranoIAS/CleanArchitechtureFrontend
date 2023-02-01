import { Observable } from "rxjs";
import { IUserModel } from "../user.models";

export abstract class CreateUserGateway{
    abstract createUser(params : {name:string,job:string}) : Observable<IUserModel>;
}