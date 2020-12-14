import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_HOST } from '../helpers/api.module';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public basePath: string;
  constructor(
    @Inject(API_HOST) private _APIHOST: any,
  ) {
  }
}
