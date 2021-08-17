import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  gettoken() {
    console.log('get token');
    return localStorage.getItem("username");
  }
}
