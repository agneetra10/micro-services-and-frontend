import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AppResolve implements Resolve<any> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot): any {
      window.location.href = "http://localhost/app1";
      return true;
  }

}