import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  private _url: string;
  public _tokenF: string;

  constructor(private _http1:HttpClient) { 
    this._url = GLOBAL.url;
  }

  getFotografias(){
    return this._http1.get(this._url + 'fotografias' ).toPromise().then(res => res);
  }

  getFotografiasAdmin(){
    let httpOptions = {
      headers: new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem('token')).token ).set('Content-Type',  'application/json')};
    return this._http1.get(this._url + 'fotografias-admin', httpOptions).toPromise()
      .then(res => res);
  }
}
