import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { GLOBAL } from 'src/app/services/global';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {
  public _fotografias: any[];
  public _fotografias1: any[];
  public _url: string;

  constructor(private _serviceFotografia: FotografiasService, private _toastr: ToastrService ) { 
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
  message(numero: Number){
    this._toastr.success(numero.toString(), numero.toString());
  }
}
