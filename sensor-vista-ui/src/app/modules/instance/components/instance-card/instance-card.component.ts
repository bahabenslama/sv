import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InstanceResponse} from "../../../../services/models/instance-response";

@Component({
  selector: 'app-instance-card',
  templateUrl: './instance-card.component.html',
  styleUrls: ['./instance-card.component.scss']
})
export class InstanceCardComponent {
  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }
  private _instance: InstanceResponse = {};
  private _manage = false;
  private _instanceCover: string | undefined;
  get instance(): InstanceResponse {
    return this._instance;
  }
  @Input()
  set instance(value: InstanceResponse) {
    this._instance = value;
  }
  get instanceCover(): string | undefined
  {
    if(this._instance.cover) {
      return 'dat:image/jpg;base64, ' + this._instance.cover;
    }
    return 'https://www.gettyimages.fr/detail/photo/aerial-view-of-misty-mountains-at-sunrise-image-libre-de-droits/1195458582?adppopup=true';
  }
  @Output() private archive: EventEmitter<InstanceResponse> = new EventEmitter<InstanceResponse>();
  @Output() private edit: EventEmitter<InstanceResponse> = new EventEmitter<InstanceResponse>();
  @Output() private details: EventEmitter<InstanceResponse> = new EventEmitter<InstanceResponse>();

  onShowDetails() {
    this.details.emit(this._instance);
  }

  onEdit() {
    this.edit.emit(this._instance);
  }

  onArchive() {
    this.archive.emit(this._instance);
  }
}
