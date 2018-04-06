import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
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
    this.service.GetPositions().subscribe((res)=>{
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
    this.service.CreatePositions(this.LoginParams.email,this.LoginParams.login)
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
    this.service.deletePositions(id)
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
    this.service.UpdatePositions(this.newvalue.id,this.newvalue.name,this.newvalue.descr)
    .subscribe((any)=>{
      $('#exampleModal').modal('hide');
      this.GetInfo();
    },(err)=>{});
  }


}
