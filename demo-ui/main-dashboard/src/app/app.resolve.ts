  
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AppResolve implements Resolve<any> {

  constructor() {}

  private serverUrl = 'http://localhost/';

  resolve(route: ActivatedRouteSnapshot): any {
      const data = `username=${route.queryParams.username}`
      window.location.href = `${this.serverUrl}${route.queryParams.appContext}?data=${btoa(data)}`
      return true;
  }

}