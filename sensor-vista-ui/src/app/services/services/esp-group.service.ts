/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllEspGroupByInstance } from '../fn/esp-group/find-all-esp-group-by-instance';
import { FindAllEspGroupByInstance$Params } from '../fn/esp-group/find-all-esp-group-by-instance';
import { PageResponseEspGroupResponse } from '../models/page-response-esp-group-response';
import { saveEspGroup } from '../fn/esp-group/save-esp-group';
import { SaveEspGroup$Params } from '../fn/esp-group/save-esp-group';

@Injectable({ providedIn: 'root' })
export class EspGroupService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveEspGroup()` */
  static readonly SaveEspGroupPath = '/espGroups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEspGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEspGroup$Response(params: SaveEspGroup$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveEspGroup(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveEspGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEspGroup(params: SaveEspGroup$Params, context?: HttpContext): Observable<number> {
    return this.saveEspGroup$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllEspGroupByInstance()` */
  static readonly FindAllEspGroupByInstancePath = '/espGroups/instance/{instance-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllEspGroupByInstance()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllEspGroupByInstance$Response(params: FindAllEspGroupByInstance$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseEspGroupResponse>> {
    return findAllEspGroupByInstance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllEspGroupByInstance$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllEspGroupByInstance(params: FindAllEspGroupByInstance$Params, context?: HttpContext): Observable<PageResponseEspGroupResponse> {
    return this.findAllEspGroupByInstance$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseEspGroupResponse>): PageResponseEspGroupResponse => r.body)
    );
  }

}
