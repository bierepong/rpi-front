import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isApi = false;
    if (/^\/api\//.test(request.url)) {
      isApi = true;
      request = request.clone({
        setHeaders: {
        },
        url: request.url.replace(/^\/api\//, `${environment.apiUrl}/`)
      });
    }

    return next.handle(request);
  }

}
