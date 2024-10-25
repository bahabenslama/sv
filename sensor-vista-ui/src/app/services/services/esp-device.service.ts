/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllEspDevicesByEspGroup } from '../fn/esp-device/find-all-esp-devices-by-esp-group';
import { FindAllEspDevicesByEspGroup$Params } from '../fn/esp-device/find-all-esp-devices-by-esp-group';
import { PageResponseEspDeviceResponse } from '../models/page-response-esp-device-response';
import { saveEspDevice } from '../fn/esp-device/save-esp-device';
import { SaveEspDevice$Params } from '../fn/esp-device/save-esp-device';
import { uploadEspDeviceCoverPicture } from '../fn/esp-device/upload-esp-device-cover-picture';
import { UploadEspDeviceCoverPicture$Params } from '../fn/esp-device/upload-esp-device-cover-picture';

@Injectable({ providedIn: 'root' })
export class EspDeviceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveEspDevice()` */
  static readonly SaveEspDevicePath = '/espDevices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEspDevice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEspDevice$Response(params: SaveEspDevice$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveEspDevice(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveEspDevice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEspDevice(params: SaveEspDevice$Params, context?: HttpContext): Observable<number> {
    return this.saveEspDevice$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadEspDeviceCoverPicture()` */
  static readonly UploadEspDeviceCoverPicturePath = '/espDevices/cover/{espDevice-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadEspDeviceCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadEspDeviceCoverPicture$Response(params: UploadEspDeviceCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadEspDeviceCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadEspDeviceCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadEspDeviceCoverPicture(params: UploadEspDeviceCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadEspDeviceCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `findAllEspDevicesByEspGroup()` */
  static readonly FindAllEspDevicesByEspGroupPath = '/espDevices/espGroup/{espGroup-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllEspDevicesByEspGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllEspDevicesByEspGroup$Response(params: FindAllEspDevicesByEspGroup$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseEspDeviceResponse>> {
    return findAllEspDevicesByEspGroup(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllEspDevicesByEspGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllEspDevicesByEspGroup(params: FindAllEspDevicesByEspGroup$Params, context?: HttpContext): Observable<PageResponseEspDeviceResponse> {
    return this.findAllEspDevicesByEspGroup$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseEspDeviceResponse>): PageResponseEspDeviceResponse => r.body)
    );
  }

}
