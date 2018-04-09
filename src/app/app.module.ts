import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { MainService } from './shared/services/main.service';
import { HttpService } from './shared/services/http.service';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { AuthComponent } from './auth/auth.component';
import { SystemComponent } from './system/system.component';




@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [HttpModule,HttpService,MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
