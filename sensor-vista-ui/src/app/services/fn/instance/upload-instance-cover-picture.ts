/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface UploadInstanceCoverPicture$Params {
  'instance-id': number;
      body?: {
'file': Blob;
}
}

export function uploadInstanceCoverPicture(http: HttpClient, rootUrl: string, params: UploadInstanceCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, uploadInstanceCoverPicture.PATH, 'post');
  if (params) {
    rb.path('instance-id', params['instance-id'], {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

uploadInstanceCoverPicture.PATH = '/instances/cover/{instance-id}';
