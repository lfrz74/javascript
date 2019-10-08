import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { AuthService } from 'src/app/services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public _token: string;
  public _fotografias: any[];
  public _fotografias1: any[];
  constructor(private _serviceFotografia: FotografiasService, private _auth: AuthService) { 
    this._token = _auth.getToken();
  }

  ngOnInit() {
    this.getFotografiasAdmin();
  }

  getFotografiasAdmin(){
    
    this._serviceFotografia.getFotografiasAdmin()
    .then(res => {
      this._fotografias = res as any[];
      this._fotografias1 = this._fotografias['fotos'];
      console.log(this._fotografias1);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
