import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/*eslint-disable @typescript-eslint/no-empty-interface */
export interface AxiosRequestConfig extends AxiosRequestConfig {}
/*eslint-disable @typescript-eslint/no-empty-interface */
export interface Response<T = any> extends AxiosResponse<T> {}

export class Request {
    constructor(private request = axios) {

        public get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
                return this.request.get<T, Response<T>>(url, config);
            }
        );
    }
}