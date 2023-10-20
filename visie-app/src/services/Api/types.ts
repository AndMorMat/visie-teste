export interface IApiResponse<T = any> {
  data: T;
}

export interface IReturnApi {
  get: (endpoint: string) => Promise<IApiResponse>,
  post: (endpoint: string, params?: any) => Promise<IApiResponse>,
  put: (endpoint: string, params?: any) => Promise<IApiResponse>,
  del: (endpoint: string, params?: any) => Promise<IApiResponse>,
}