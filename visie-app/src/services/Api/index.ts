import axios, { AxiosInstance } from 'axios'
import { IApiResponse, IReturnApi } from './types'

const baseURL: string = __DEV__ ? 'http://192.168.1.100:8000/people' : ''
const configs = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export function Api(): IReturnApi {
  const axiosInstance: AxiosInstance = axios.create({ baseURL })

  const post = (endpoint: string, params: any): Promise<IApiResponse> => {
    return axiosInstance.post(endpoint, params, configs)
  }

  const get = (endpoint: string): Promise<IApiResponse> => {
    return axiosInstance.get(endpoint)
  }

  const put = (endpoint: string, params: any): Promise<IApiResponse> => {
    return axiosInstance.put(endpoint, params, configs)
  }

  const del = (endpoint: string, params: any): Promise<IApiResponse> => {
    return axiosInstance.delete(endpoint, params)
  }

  return {
    get,
    post,
    put,
    del
  }
}