import axios, {AxiosError, AxiosResponse} from 'axios';
import {
  BaseRequestParams,
  BaseRequestResponse,
  RequestHeaders,
  RequestParams,
  RequestResponse,
  CreateHeadersParams,
} from '@core/interfaces/request.interface';

export const get = async <Headers, Response>(
  params: BaseRequestParams<Headers>,
): Promise<RequestResponse<Response>> => {
  try {
    const resp = await axios.get(params.url, {headers: params.headers});

    return getResponse<Response>(resp);
  } catch (error) {
    return getError(error);
  }
};

export const post = async <Body, Headers, Response>(
  params: RequestParams<Body, Headers>,
): Promise<RequestResponse<Response>> => {
  try {
    const resp: AxiosResponse = await axios.post(params.url, params.body, {
      headers: params.headers,
    });

    return getResponse<Response>(resp);
  } catch (error) {
    return getError(error);
  }
};

export const put = async <Body, Headers, Response>(
  params: RequestParams<Body, Headers>,
): Promise<RequestResponse<Response>> => {
  try {
    const resp: AxiosResponse = await axios.put(params.url, params.body, {
      headers: params.headers,
    });

    return getResponse<Response>(resp);
  } catch (error) {
    return getError(error);
  }
};

export const patch = async <Body, Headers, Response>(
  params: RequestParams<Body, Headers>,
): Promise<RequestResponse<Response>> => {
  try {
    const resp: AxiosResponse = await axios.patch(params.url, params.body, {
      headers: params.headers,
    });
    return getResponse<Response>(resp);
  } catch (error) {
    return getError(error);
  }
};

export const deleteRequest = async <Headers, Response>(
  params: BaseRequestParams<Headers>,
): Promise<RequestResponse<Response>> => {
  try {
    const resp = await axios.delete(params.url, params.headers);
    return getResponse(resp);
  } catch (error) {
    return getError(error);
  }
};

const getResponse = <T>(resp: AxiosResponse<T>): BaseRequestResponse<T> => {
  return {
    error: false,
    code: resp.status,
    data: resp.data,
    message: '',
    authorization: resp.headers?.authorization || null,
  };
};

const getError = (error: unknown | AxiosError): BaseRequestResponse<null> => {
  return {
    error: true,
    code: axios.isAxiosError(error) ? error.response?.status : 0,
    data: null,
    message: axios.isAxiosError(error)
      ? error.response?.data?.message
      : 'Error conection',
  };
};

export const createHeaders = <T>(
  params?: CreateHeadersParams<T>,
): RequestHeaders => {
  const headers: RequestHeaders = {
    ...params?.headers,
    'Content-Type': 'application/json',
  };

  if (params?.sessionToken) {
    headers.Authorization = params.sessionToken;
  }

  return headers;
};
