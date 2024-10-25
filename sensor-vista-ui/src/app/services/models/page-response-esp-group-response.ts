/* tslint:disable */
/* eslint-disable */
import { EspGroupResponse } from '../models/esp-group-response';
export interface PageResponseEspGroupResponse {
  content?: Array<EspGroupResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
