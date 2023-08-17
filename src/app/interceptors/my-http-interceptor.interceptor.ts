import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigSettings } from '../config/config.settings';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {
  lang: any = 'en';
  constructor(private configSettings: ConfigSettings) {
    this.lang = this.configSettings._lang;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders({
      // Authorization: 'token 123',
      // lang: this.lang,
    });
    const authReq = request.clone({
      headers,
    });
    return next.handle(authReq);
  }
}
