import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { UsersComponent } from './users/users.component';

import { DpComponent } from './dp/dp.component';
import { MeComponent } from './me/me.component';
import { OfficeComponent } from './office/office.component';
import { CompanysComponent } from './companys/companys.component';
import { ShipsTypeComponent } from './ships-type/ships-type.component';
import { ShipsComponent } from './ships/ships.component';
import { SeamenComponent } from './seamen/seamen.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { SystemComponent } from './system.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule 
  ],
  declarations: [SystemComponent,UsersComponent, DpComponent, MeComponent, OfficeComponent, CompanysComponent, ShipsTypeComponent, ShipsComponent, SeamenComponent, VacancyComponent]
  
})
export class SystemModule { }
