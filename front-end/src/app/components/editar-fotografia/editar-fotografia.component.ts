import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { UploadService } from 'src/app/services/upload.service';
import { GLOBAL } from 'src/app/services/global';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-fotografia',
  templateUrl: './editar-fotografia.component.html',
  styleUrls: ['./editar-fotografia.component.css']
})
export class EditarFotografiaComponent implements OnInit {
  public _fot: any = {};
  public _image_selected: string;
  public _filesToUpload: Array<File>;
  public _url: string;

  constructor(private _activatedRouter: ActivatedRoute, private _serviceFoto: FotografiasService,
              private _upload: UploadService, private _router: Router, private _toastr: ToastrService ) { 
      this._url = GLOBAL.url;
  }

  ngOnInit() {
    this.getFotografia();
  }

  getFotografia(){
    this._activatedRouter.params.forEach((param: Params) => {
      this._serviceFoto.getFotografiaById(param['id'])
      .then(res => {
        this._fot = JSON.parse(JSON.stringify(res)).foto;
        this._image_selected = JSON.parse(JSON.stringify(res)).foto.imagen;
      })
      .catch(err => {
        console.log(err);
      });
    })
  }

  editar() {
    this._serviceFoto.updateFotografia(this._fot)
    .then(res => {
      this._toastr.success('Información actualizada con éxito..!', 'MENSAJE:');
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
