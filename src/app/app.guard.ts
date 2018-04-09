import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Injectable } from '@angular/core';

import { MainService } from './shared/services/main.service';

@Injectable()
export class AppAccessGuard implements CanActivate{
    constructor(private service: MainService,private router: Router){
    }
    canActivate(router:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean{
        /*if(router.routeConfig.path == "login"){
            if(this.service.IsLogedIn()){
                this.router.navigate(['system','all_coworkings']);
                return false;
            }
        }
        
        return true;
        */
       if(localStorage.getItem('token')){
        this.service.IsLogedIn(localStorage.getItem('token'))
          .subscribe((res)=>{
            this.router.navigate(['/system']);
            return true;
            },
            (err)=>{
              this.router.navigate(['/login']);
              return false;    
            }  
            );
        }
        else{
          this.router.navigate(['/login']);
          return false;  
        }

    }
}