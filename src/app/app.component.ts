import { Component, OnInit } from '@angular/core';
import { MainService } from './shared/services/main.service';
import { Router } from '@angular/router';
import { HttpService } from './shared/services/http.service';
import { TokenModel } from './shared/models/token.model';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private service:MainService,private router: Router,private http: HttpService){
    


  }
  ngOnInit() {
    
    if(localStorage.getItem('token')){
    this.service.IsLogedIn(localStorage.getItem('token'))
      .subscribe((res)=>{
       /*
          this.http.headers.delete('Authorization');
          this.http.headers.append('Authorization',localStorage.getItem('token'));
          this.http.token = new TokenModel(localStorage.getItem('token'));
        */
       this.service.InitTokenHeader(localStorage.getItem('token'));
        this.router.navigate(['/system']);

        },
        (err)=>{
          this.router.navigate(['/login']); 
              
        }  
      

    );
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
