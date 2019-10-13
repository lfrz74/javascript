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

  getFotografiaById(id: number){
    let httpOptions = {
      headers: new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem('token')).token ).set('Content-Type',  'application/json')};
    return this._http1.get(this._url + 'fotografia1/' + id, httpOptions).toPromise()
      .then(res => res);
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

  saveFotografia(foto: any){
    let httpOptions = {
      headers: new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem('token')).token ).set('Content-Type',  'application/json')};
    return this._http1.post(this._url + 'fotografia', foto, httpOptions).toPromise()
      .then(res => res);
  }

  uploadFotografia(foto: any){
    let httpOptions = {
      headers: new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem('token')).token ).set('Content-Type',  'application/json')};
    return this._http1.post(this._url + 'upload-fotografia/', foto,  httpOptions).toPromise()
      .then(res => res);
  }

  updateFotografia(foto: any){
    let httpOptions = {
      headers: new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem('token')).token ).set('Content-Type',  'application/json')};
    return this._http1.put(this._url + 'fotografia/' + foto.id, foto, httpOptions).toPromise()
      .then(res => res);
  }

}
