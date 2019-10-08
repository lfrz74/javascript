import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getIdentity(){
    let identity = JSON.parse(sessionStorage.getItem('identity_user'));
    if (identity){
      return identity;
    }else{
      return null;
    }
  }

  getToken(){
    let token = JSON.parse(sessionStorage.getItem('token'));
    if (token){
      return token;
    }else{
      return null;
    }
  }

  logOut(){
    sessionStorage.removeItem('identity_user');
    sessionStorage.clear();
  }
}
