/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InstanceResponse } from '../../models/instance-response';

export interface FindInstanceById$Params {
  'instance-id': number;
}

export function findInstanceById(http: HttpClient, rootUrl: string, params: FindInstanceById$Params, context?: HttpContext): Observable<StrictHttpResponse<InstanceResponse>> {
  const rb = new RequestBuilder(rootUrl, findInstanceById.PATH, 'get');
  if (params) {
    rb.path('instance-id', params['instance-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InstanceResponse>;
    })
  );
}

findInstanceById.PATH = '/instances/{instance-id}';
