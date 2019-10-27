import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { GLOBAL } from 'src/app/services/global';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [Animations]
})
export class HomeComponent implements OnInit {
  public _fotos1: any[];
  public _fotografias1: any[];
  public _url: string;
  public _fotografia_seleccionada: any={};
  public _ver_mas: boolean=false;
  public _foto_actual: number = 0;
  public _direccion: string;
  public _show_thumbs: boolean=false;

  constructor(private _serviceFoto: FotografiasService,
    private _activeRoute: ActivatedRoute,
    private _router: Router ) { 
    this._url = GLOBAL.url;
  }

  ngOnInit() {
    this.getFotografia();
  }

  getFotografia(){
    this._serviceFoto.getFotografias()
    .then(res =>{
      this._fotografias1 = res as any[];
      this._fotos1 = this._fotografias1['fotos'];
      this._activeRoute.params.forEach((param:Params)=> {
        let num = param['id'];
        this._fotografia_seleccionada.fotografia = this._fotos1.find(f => {
          return f.numero == num;
        })
        if (!this._fotografia_seleccionada.fotografia){
          this._fotografia_seleccionada.fotografia = this._fotos1[0];
        }
        let next_img = this._fotos1.indexOf(this._fotografia_seleccionada.fotografia) + 1;
        let prev_img = this._fotos1.indexOf(this._fotografia_seleccionada.fotografia) - 1;
        this._fotografia_seleccionada.siguiente = next_img < this._fotos1.length ? this._fotos1[next_img].numero : null;
        this._fotografia_seleccionada.anterior =  prev_img >=0 ? this._fotos1[prev_img].numero : null;
        this.moverFotografia(this._fotografia_seleccionada.fotografia);
        //console.log(this._fotografia_seleccionada.fotografia);
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }
  moverFotografia(fotog: any){
    this._show_thumbs = false;
    if (fotog.numero > this._foto_actual){
      this._direccion = "right";
    }else if(fotog.numero < this._foto_actual){
      this._direccion = "left";
    }

    this._foto_actual =  fotog.numero;
    this._router.navigate(['/home', this._foto_actual]);
  }
}
