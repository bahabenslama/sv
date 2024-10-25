/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseInstanceResponse } from '../../models/page-response-instance-response';

export interface FindAllInstances$Params {
  page?: number;
  size?: number;
}

export function findAllInstances(http: HttpClient, rootUrl: string, params?: FindAllInstances$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseInstanceResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllInstances.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseInstanceResponse>;
    })
  );
}

findAllInstances.PATH = '/instances';
