import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: 'login',component: AuthComponent/*, canActivate: [AppAccessGuard]*/}/*,
    { path: 'system', loadChildren: './systemModule/system.module#SystemModule'}*/
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
