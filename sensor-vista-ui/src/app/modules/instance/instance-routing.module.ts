import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {InstanceListComponent} from "./pages/instance-list/instance-list.component";
import {MyInstancesComponent} from "./pages/my-instances/my-instances.component";
import {ManageInstanceComponent} from "./pages/manage-instance/manage-instance.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: InstanceListComponent
      },
      {
        path: 'my-instances',
        component: MyInstancesComponent
      },
      {
        path: 'manage',
        component: ManageInstanceComponent
      },
      {
        path: 'manage/:instanceId',
        component: ManageInstanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstanceRoutingModule { }
