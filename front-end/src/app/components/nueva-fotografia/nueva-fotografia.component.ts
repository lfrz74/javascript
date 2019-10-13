import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { UploadService } from 'src/app/services/upload.service';
import { GLOBAL } from 'src/app/services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-fotografia',
  templateUrl: './nueva-fotografia.component.html',
  styleUrls: ['./nueva-fotografia.component.css']
})
export class NuevaFotografiaComponent implements OnInit {
  public _fot: any={};
  public _filesToUpload: Array<File>;
  public _image_selected: string;
  public _url: string;

  constructor( private _serviceFotografia: FotografiasService,
               private _upload: UploadService,
               private _router: Router ) {
    this._url = GLOBAL.url;
  }

  ngOnInit() {
  }

  agregar() {
    this._fot.usuario_creacion = JSON.parse(sessionStorage.getItem('identity_user')).usuario.usuario;
    this._serviceFotografia.saveFotografia(this._fot)
    .then(res => {
      if (this._filesToUpload){
        this._upload.upload(this._url + 'upload-fotografia/' + JSON.parse(JSON.stringify(res)).foto.id, this._filesToUpload)
        .then(fotos => {
          this._router.navigate(['/admin/list']);
        })
        .catch(err =>{
          console.log(err);
          this._router.navigate(['/admin/list']);
        })
      }

    })
    .catch(err => {
      console.log(err);
    });
  }

  fileChangeEvent(fileinput:any){
    
    this._filesToUpload = fileinput.target.files.length > 0 ? <Array<File>>fileinput.target.files:null;
    this._image_selected = this._filesToUpload?fileinput.target.files[0].name:'';
  }
}
