import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from '@angular/http';
import {TokenModel} from "./../models/token.model";

import { HttpService } from './http.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';



@Injectable()
export class MainService{
    
  public onLoginChange$: Subject<boolean>;

    constructor(private http: HttpService, private router: Router){
        this.onLoginChange$ = new Subject();
        this.onLoginChange$.next(false);
    }

    

    UserLogin(email:string, password:string){
        let params = {
            username: email,
            password: password
        };
    
        return this.http.PostData('auth/obtain',JSON.stringify(params));
    }
    CreateUser(emaill:string,login:string, password:string){
      let params = {
          email: emaill,
          username:login,
          password: password
      };
  
      return this.http.PostData('users/',JSON.stringify(params));
  }
    deleteUser(id:number){
      return this.http.DeleteData('users/'+id);
  }


    GetUsers(){
      
      return this.http.GetData('users/','');
      
    }


    IsLogedIn(TokenStr:string){
      let params = {
        token: TokenStr
      };
    
      return this.http.PostData('auth/verify',JSON.stringify(params));
      
    }

    InitTokenHeader(token:string){
      this.http.BaseInitByToken(token);
    }

    UserLogout(){
      return this.http.PostData('auth/logout', '');
    }
    
    GetShipsTypes(){
      return this.http.GetData('vessel-types/','');
    }
    CreateShipsTypes(name:string,descr:string){
      let params = {
        name : name,
        description: descr
      };
    
      return this.http.PostData('vessel-types/',JSON.stringify(params));
    }

    deleteShip(id:number){
      return this.http.DeleteData('vessel-types/'+id);
  }
  UpdateShip(id:any,name:string,descr:string){
    let params = {
      name : name,
      description: descr
    }
    return this.http.PutData('vessel-types/'+id+"/",JSON.stringify(params));
}


GetDp(){
  return this.http.GetData('dp-systems/','');
}
CreateDp(name:string,descr:string){
  let params = {
    name : name,
    description: descr
  };

  return this.http.PostData('dp-systems/',JSON.stringify(params));
}
deleteDp(id:number){
  return this.http.DeleteData('dp-systems/'+id);
}
UpdateDp(id:any,name:string,descr:string){
  let params = {
    name : name,
    description: descr
  }
  return this.http.PutData('dp-systems/'+id+"/",JSON.stringify(params));
}

GetMeTypes(){
  return this.http.GetData('me-types/','');
}
CreateMeTypes(name:string,descr:string){
  let params = {
    name : name,
    description: descr
  };

  return this.http.PostData('me-types/',JSON.stringify(params));
}
deleteMeTypes(id:number){
  return this.http.DeleteData('me-types/'+id);
}
UpdateMeTypes(id:any,name:string,descr:string){
  let params = {
    name : name,
    description: descr
  }
  return this.http.PutData('me-types/'+id+"/",JSON.stringify(params));
}

GetPositions(){
  return this.http.GetData('positions/','');
}
CreatePositions(name:string,descr:string){
  let params = {
    name : name,
    description: descr
  };

  return this.http.PostData('positions/',JSON.stringify(params));
}
deletePositions(id:number){
  return this.http.DeleteData('positions/'+id);
}
UpdatePositions(id:any,name:string,descr:string){
  let params = {
    name : name,
    description: descr
  }
  return this.http.PutData('positions/'+id+"/",JSON.stringify(params));
}
GetVacancy(){
  return this.http.GetData('vacancies/','');
}
CreateVacancy(name:string,descr:string){
  let params = {
    name : name,
    description: descr
  };

  return this.http.PostData('vacancies/',JSON.stringify(params));
}
deleteVacancy(id:number){
  return this.http.DeleteData('vacancies/'+id);
}
UpdateVacancy(id:any,name:string,descr:string){
  let params = {
    name : name,
    description: descr
  }
  return this.http.PutData('vacancies/'+id+"/",JSON.stringify(params));
}





























}