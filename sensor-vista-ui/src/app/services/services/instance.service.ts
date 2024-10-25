/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllInstances } from '../fn/instance/find-all-instances';
import { FindAllInstances$Params } from '../fn/instance/find-all-instances';
import { findAllInstancesByOwner } from '../fn/instance/find-all-instances-by-owner';
import { FindAllInstancesByOwner$Params } from '../fn/instance/find-all-instances-by-owner';
import { findInstanceById } from '../fn/instance/find-instance-by-id';
import { FindInstanceById$Params } from '../fn/instance/find-instance-by-id';
import { InstanceResponse } from '../models/instance-response';
import { PageResponseInstanceResponse } from '../models/page-response-instance-response';
import { saveInstance } from '../fn/instance/save-instance';
import { SaveInstance$Params } from '../fn/instance/save-instance';
import { uploadInstanceCoverPicture } from '../fn/instance/upload-instance-cover-picture';
import { UploadInstanceCoverPicture$Params } from '../fn/instance/upload-instance-cover-picture';

@Injectable({ providedIn: 'root' })
export class InstanceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllInstances()` */
  static readonly FindAllInstancesPath = '/instances';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllInstances()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllInstances$Response(params?: FindAllInstances$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseInstanceResponse>> {
    return findAllInstances(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllInstances$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllInstances(params?: FindAllInstances$Params, context?: HttpContext): Observable<PageResponseInstanceResponse> {
    return this.findAllInstances$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseInstanceResponse>): PageResponseInstanceResponse => r.body)
    );
  }

  /** Path part for operation `saveInstance()` */
  static readonly SaveInstancePath = '/instances';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveInstance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInstance$Response(params: SaveInstance$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveInstance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveInstance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInstance(params: SaveInstance$Params, context?: HttpContext): Observable<number> {
    return this.saveInstance$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadInstanceCoverPicture()` */
  static readonly UploadInstanceCoverPicturePath = '/instances/cover/{instance-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadInstanceCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadInstanceCoverPicture$Response(params: UploadInstanceCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadInstanceCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadInstanceCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadInstanceCoverPicture(params: UploadInstanceCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadInstanceCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `findInstanceById()` */
  static readonly FindInstanceByIdPath = '/instances/{instance-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findInstanceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findInstanceById$Response(params: FindInstanceById$Params, context?: HttpContext): Observable<StrictHttpResponse<InstanceResponse>> {
    return findInstanceById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findInstanceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findInstanceById(params: FindInstanceById$Params, context?: HttpContext): Observable<InstanceResponse> {
    return this.findInstanceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<InstanceResponse>): InstanceResponse => r.body)
    );
  }

  /** Path part for operation `findAllInstancesByOwner()` */
  static readonly FindAllInstancesByOwnerPath = '/instances/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllInstancesByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllInstancesByOwner$Response(params?: FindAllInstancesByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseInstanceResponse>> {
    return findAllInstancesByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllInstancesByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllInstancesByOwner(params?: FindAllInstancesByOwner$Params, context?: HttpContext): Observable<PageResponseInstanceResponse> {
    return this.findAllInstancesByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseInstanceResponse>): PageResponseInstanceResponse => r.body)
    );
  }

}
