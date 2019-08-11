import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public fotos1: any[];
  constructor(private _serviceFoto: FotografiasService ) { }

  ngOnInit() {
    this.getFotografia();
  }

  getFotografia(){
    this._serviceFoto.getFotografias()
    .then(res =>{
      this.fotos1 = res as any[];
      console.log(this.fotos1);
    })
    .catch(err =>{
      console.log(err);
    })
  }
}
