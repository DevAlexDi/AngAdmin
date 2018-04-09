import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/services/main.service';
@Component({
  selector: 'app-company-datails',
  templateUrl: './company-datails.component.html',
  styleUrls: ['./company-datails.component.css']
})
export class CompanyDatailsComponent implements OnInit {

  users:any = [];

  id: number;


  constructor(private route:ActivatedRoute,private service:MainService,private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.GetInfo();
  }

  GetInfo(){
    this.service.GetCompanieInfo(this.id).subscribe((res)=>{
      console.log(res);
      this.users = res;
    
    },
    (err)=>{
      console.log(err);
          
    }  
);
  }

}
