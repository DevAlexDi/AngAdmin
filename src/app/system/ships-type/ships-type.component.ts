import { Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-ships-type',
  templateUrl: './ships-type.component.html',
  styleUrls: ['./ships-type.component.css']
})
export class ShipsTypeComponent implements OnInit {
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


  ngOnInit() {


    this.service.GetShipsTypes().subscribe((res)=>{
          console.log(res);
          this.users = res;
        
        },
        (err)=>{
          console.log(err);
              
        }  
    );
}

CreateUserForm(){
  this.service.CreateShipsTypes(this.LoginParams.email,this.LoginParams.login)
    .subscribe((res)=>{
      this.ErrorShow = false;
     console.log(res)
     
     this.service.GetShipsTypes().subscribe((res)=>{
      console.log(res);
      this.users = res;
    
    },
    (err)=>{
      console.log(err);
          
    }  
);
      },
        (err)=>{
            console.log(err);
          this.ErrorShow = true;
            
      }  
    

  );
}


delete(id:number){
  this.service.deleteShip(id)
  .subscribe((any)=>{
    this.service.GetShipsTypes().subscribe((res)=>{
      console.log(res);
      this.users = res;
    
    },
    (err)=>{
      console.log(err);
          
    }  
);
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
  this.service.UpdateShip(this.newvalue.id,this.newvalue.name,this.newvalue.descr)
  .subscribe((any)=>{
    $('#exampleModal').modal('hide');
    this.service.GetShipsTypes().subscribe((res)=>{
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
