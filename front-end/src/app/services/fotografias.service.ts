import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  private _url: string;
  constructor(private _http1:HttpClient) { 
    this._url = GLOBAL.url;
  }

  getFotografias(){
    return this._http1.get(this._url + 'fotografias' ).toPromise().then(res => res);
  }
}
