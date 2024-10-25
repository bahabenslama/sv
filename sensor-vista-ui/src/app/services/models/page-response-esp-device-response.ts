/* tslint:disable */
/* eslint-disable */
import { EspDeviceResponse } from '../models/esp-device-response';
export interface PageResponseEspDeviceResponse {
  content?: Array<EspDeviceResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
