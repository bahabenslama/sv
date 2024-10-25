import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceRoutingModule } from './instance-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { InstanceListComponent } from './pages/instance-list/instance-list.component';
import { InstanceCardComponent } from './components/instance-card/instance-card.component';
import { MyInstancesComponent } from './pages/my-instances/my-instances.component';
import { ManageInstanceComponent } from './pages/manage-instance/manage-instance.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    InstanceListComponent,
    InstanceCardComponent,
    MyInstancesComponent,
    ManageInstanceComponent
  ],
    imports: [
        CommonModule,
        InstanceRoutingModule,
        FormsModule
    ]
})
export class InstanceModule { }
