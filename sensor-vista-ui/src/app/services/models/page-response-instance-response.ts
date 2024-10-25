/* tslint:disable */
/* eslint-disable */
import { InstanceResponse } from '../models/instance-response';
export interface PageResponseInstanceResponse {
  content?: Array<InstanceResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
