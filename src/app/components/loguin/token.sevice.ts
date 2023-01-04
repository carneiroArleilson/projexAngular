import {Injectable} from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() {
  }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: {sucess: boolean, email: string}) {
    window.localStorage.setItem(KEY, JSON.stringify(token));
  }

  getToken() {
    
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
