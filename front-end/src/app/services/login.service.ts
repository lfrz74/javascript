import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string;

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Hola chicos login'
    })
  };

  constructor(private _http1:HttpClient) { 
    this._url = GLOBAL.url;
  }

  login(usuario:any, getToken?:string){

    if (getToken){
      usuario.token = getToken;
    }
    return this._http1.post(this._url + 'login', usuario, this._httpOptions ).toPromise()
    .then(res => res);
  }
}
