/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface UploadEspDeviceCoverPicture$Params {
  'espDevice-id': number;
      body?: {
'file': Blob;
}
}

export function uploadEspDeviceCoverPicture(http: HttpClient, rootUrl: string, params: UploadEspDeviceCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, uploadEspDeviceCoverPicture.PATH, 'post');
  if (params) {
    rb.path('espDevice-id', params['espDevice-id'], {});
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

uploadEspDeviceCoverPicture.PATH = '/espDevices/cover/{espDevice-id}';
