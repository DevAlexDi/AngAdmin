import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MainService } from '../../shared/services/main.service';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = []

  public LoginParams = {
    email:'',
    login:'',
    password: ''
  }
  public ErrorShow:boolean = false;
  
  constructor(private service:MainService,private router: Router){
    


  }

  ngOnInit() {


      this.service.GetUsers().subscribe((res)=>{
            console.log(res);
            this.users = res;
          
          },
          (err)=>{
            console.log(err);
                
          }  
      );
  }

  CreateUserForm(){
    this.service.CreateUser(this.LoginParams.email,this.LoginParams.login, this.LoginParams.password)
      .subscribe((res)=>{
        this.ErrorShow = false;
       console.log(res)
       this.service.GetUsers().subscribe((res)=>{
            console.log(res);
            this.users = res;
            
          },
          (err)=>{
            console.log(err);
           
          }  
      );
        },
          (err)=>{
              
            this.ErrorShow = true;
              
        }  
      

    );
  }
  

  delete(id:number){
    this.service.deleteUser(id)
    .subscribe((any)=>{
      this.service.GetUsers().subscribe((res)=>{
        console.log(res);
        this.users = res;
      
      },
      (err)=>{
        console.log(err);
            
      }  
  );
    },(err)=>{});
  }






}
