import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { AuthService } from 'src/app/services/auth.service';
import { JsonPipe } from '@angular/common';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public _token: string;
  public _fotografias: any[];
  public _fotografias1: any[];
  public _url: string;

  constructor(private _serviceFotografia: FotografiasService, private _auth: AuthService) { 
    this._token = _auth.getToken();
    this._url = GLOBAL.url;
  }

  ngOnInit() {
    this.getFotografiasAdmin();
  }

  getFotografiasAdmin(){
    
    this._serviceFotografia.getFotografiasAdmin()
    .then(res => {
      this._fotografias = res as any[];
      this._fotografias1 = this._fotografias['fotos'];
    })
    .catch(err => {
      console.log(err);
    });
  }
}
