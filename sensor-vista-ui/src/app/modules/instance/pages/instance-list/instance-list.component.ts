import {Component, OnInit} from '@angular/core';
import {InstanceService} from "../../../../services/services/instance.service";
import {Router} from "@angular/router";
import {PageResponseInstanceResponse} from "../../../../services/models/page-response-instance-response";

@Component({
  selector: 'app-instance-list',
  templateUrl: './instance-list.component.html',
  styleUrls: ['./instance-list.component.scss']
})
export class InstanceListComponent implements OnInit {
  instanceResponse: PageResponseInstanceResponse = {};
   page = 0;
   size = 4;

  constructor(
    private instanceService: InstanceService,
    private router: Router
  ){
  }
  ngOnInit(): void {
    this.findAllInstances();
  }

  private findAllInstances() {
    this.instanceService.findAllInstances({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (instances) => {
        this.instanceResponse = instances;
      }
    })
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllInstances();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllInstances();
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllInstances();
  }

  goToNextPage() {
    this.page++;
    this.findAllInstances();
  }

  goToLastPage() {
    this.page = this.instanceResponse.totalPages as number - 1;
    this.findAllInstances();
  }
  get isLastPage(): boolean {
    return this.page == this.instanceResponse.totalPages as number - 1;
  }
}
