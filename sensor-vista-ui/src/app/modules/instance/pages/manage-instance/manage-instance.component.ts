import {Component, OnInit} from '@angular/core';
import {InstanceService} from "../../../../services/services/instance.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InstanceRequest} from "../../../../services/models/instance-request";

@Component({
  selector: 'app-manage-instance',
  templateUrl: './manage-instance.component.html',
  styleUrls: ['./manage-instance.component.scss']
})
export class ManageInstanceComponent{
  instanceRequest: InstanceRequest = {archived: false, name: ""};
  errorMsg: Array<string> = [];
  selectedPicture: string | undefined;
  selectedInstanceCover: any;
  constructor(
    private instanceService: InstanceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
  onFileSelected(event: any) {
    this.selectedInstanceCover = event.target.files[0];
    console.log(this.selectedInstanceCover);
    if(this.selectedInstanceCover) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      }
      reader.readAsDataURL(this.selectedInstanceCover);
    }
  }
  saveInstance() {
    this.instanceService.saveInstance({
      body: this.instanceRequest
    }).subscribe({
      next: (instanceId) => {
        this.instanceService.uploadInstanceCoverPicture({
          'instance-id': instanceId,
          body: {
            file: this.selectedInstanceCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['instances/my-instances']);
          }
        })
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors || ['An unexpected error occurred.'];
      }
    });
  }
}
