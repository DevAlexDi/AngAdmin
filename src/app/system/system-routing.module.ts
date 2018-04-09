import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';

import { UsersComponent } from './users/users.component';
import { ShipsTypeComponent } from './ships-type/ships-type.component';
import { DpComponent } from './dp/dp.component';
import { MeComponent } from './me/me.component';
import { OfficeComponent } from './office/office.component';
import { CompanysComponent } from './companys/companys.component';
import { ShipsComponent } from './ships/ships.component';
import { SeamenComponent } from './seamen/seamen.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { SystemComponent } from './system.component';



const routes: Routes = [
    {path:'', component: SystemComponent, children:
        [
          { path: 'users', component: UsersComponent},
          { path: 'ships-types', component: ShipsTypeComponent},
          { path: 'dp', component: DpComponent},
          { path: 'me', component: MeComponent},
          { path: 'office', component: OfficeComponent},
          { path: 'companys', component: CompanysComponent},
          { path: 'ships', component: ShipsComponent},
          { path: 'seamen', component: SeamenComponent},
          { path: 'vacancy', component: VacancyComponent}
        ]
    }
];


     


@NgModule({
  imports: [
   
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class SystemRoutingModule { }
