import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector:'auth',
  templateUrl:'auth.component.html'
})
export class AuthComponent implements OnInit  {
  public LoginParams = {
    email:'',
    password: ''
  }
  isLogined = false;
  isLoginErr = false;



  constructor(private service:MainService,private router: Router){
    


  }

  /*if(localStorage.getItem('token')){
    this.isLogined = true;
  }
  localStorage.setItem('token',data.token);*/

  
  ngOnInit() {
    
  }



  Login(){
    this.isLoginErr = false;

      this.service.UserLogin(this.LoginParams.email, this.LoginParams.password)
      .subscribe((res)=>{
        localStorage.setItem('token',res.token);
        if(localStorage.getItem('token')){
        this.service.onLoginChange$.next(true);
        this.isLogined = true;


       
          this.isLogined = true;
          
          this.service.InitTokenHeader(localStorage.getItem('token'));

          this.router.navigate(['/system']);

        }

        },
          (err)=>{
              console.log(err);
              this.isLoginErr = true;
              
        }  
      

    );
}






}
