import {GenericRequestHeader} from '../types/request.type';

export interface BaseRequestResponse<T = void> {
  error: boolean;
  code?: number | undefined;
  data: T;
  message?: string;
  authorization?: string | undefined | null;
}

export interface RequestResponse<T>
  extends Omit<BaseRequestResponse<T>, 'data'> {
  data: T | null;
}

export interface GenerateResponse<T> {
  data: T;
  error: boolean;
}

export interface BaseRequestParams<Headers = void> {
  url: string;
  headers?: Headers;
}

export interface RequestParams<Body, Headers>
  extends BaseRequestParams<Headers> {
  body: Body;
}

export interface RequestHeaders<T = void> {
  [key: string]: GenericRequestHeader<T>;
  'Content-Type': string;
  Authorization?: string;
}

export interface CreateHeadersParams<T> {
  sessionToken?: string;
  headers?: T;
}
