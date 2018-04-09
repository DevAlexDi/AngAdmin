import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  users:any = []

  public newvalue = {
    id:'',
    name:'',
    descr:'',
  }


  public LoginParams = {
    email:'',
    login:'',

  }
  public ErrorShow:boolean = false;
  constructor(private service:MainService,private router: Router){
    


  }

  GetInfo(){
    this.service.GetVacancy().subscribe((res)=>{
      console.log(res);
      this.users = res;
    
    },
    (err)=>{
      console.log(err);
          
    }  
);
  }

  ngOnInit() {
    this.GetInfo();


  }

  CreateUserForm(){
    this.service.CreateVacancy(this.LoginParams.email,this.LoginParams.login)
      .subscribe((res)=>{
        this.ErrorShow = false;
       console.log(res);
       this.GetInfo();
        },
          (err)=>{
              console.log(err);
            this.ErrorShow = true;
              
        }  
      
  
    );
  }


  delete(id:number){
    this.service.deleteVacancy(id)
    .subscribe((any)=>{
      this.GetInfo();
    },(err)=>{});
  }

  UpdateOpenModal(item){
    console.log(item);
    $('#exampleModal').modal('show');
    this.newvalue.id = item.id;
    this.newvalue.name = item.name;
    this.newvalue.descr = item.description;
  }
  Update(){
    this.service.UpdateVacancy(this.newvalue.id,this.newvalue.name,this.newvalue.descr)
    .subscribe((any)=>{
      $('#exampleModal').modal('hide');
      this.GetInfo();
    },(err)=>{});
  }



}
