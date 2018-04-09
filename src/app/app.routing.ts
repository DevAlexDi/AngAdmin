import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';




const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: 'login',component: AuthComponent},
    { path: 'system',loadChildren: './system/system.module#SystemModule'}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
