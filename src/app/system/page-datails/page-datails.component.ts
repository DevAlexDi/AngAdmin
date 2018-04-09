import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/services/main.service';

@Component({
  selector: 'app-page-datails',
  templateUrl: './page-datails.component.html',
  styleUrls: ['./page-datails.component.css']
})
export class PageDatailsComponent implements OnInit {

  users:any = [];

  id: number;

  loadFlag:boolean = false;

  constructor(private route:ActivatedRoute,private service:MainService,private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.GetInfo();
  }

  GetInfo(){
    this.service.GetVesselInfo(this.id).subscribe((res)=>{
      console.log(res);
      this.users = res;
      this.loadFlag = true;
    },
    (err)=>{
      console.log(err);
          
    }  
);
  }



}
