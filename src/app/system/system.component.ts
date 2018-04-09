import { Component } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'system-component',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent {
  constructor(private service:MainService,private router: Router){
    


  }
  logout(){
    localStorage.removeItem('token');
    this.service.InitTokenHeader('');
    this.router.navigate(['/login']);
  }


}
