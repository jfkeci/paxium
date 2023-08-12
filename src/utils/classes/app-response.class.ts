import { IAppResponse } from '../interfaces/app-response.interface';

export class AppResponse<T> implements IAppResponse {
  type: string;
  code: number;
  title: string;
  message?: string;
  data?: T;
  stack?: string[] | undefined;

  constructor(params: IAppResponse) {
    this.type = params.type;
    this.code = params.code;
    this.title = params.title;

    if (params.message) this.message = params.message;
    if (params.data) this.data = params.data;
    if (params.meta) this.meta = params.meta;
    if (params.stack) this.stack = params.stack;

    return this;
  }
}
