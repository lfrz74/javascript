import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  upload(url:string, files:Array<File>){
    return new Promise((resolve, reject) =>{
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i=0; i < files.length; i++){
        formData.append('foto', files[i], files[i].name);
      }
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', JSON.parse(sessionStorage.getItem('token')).token);
      xhr.send(formData);
      xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){ //0: iniciando; 1: conex serv ok; 2: peticion recibida: 3; peticion en proceso ; 4; petición procesada y finalizada
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(JSON.parse(xhr.response));
          }
        }
      }
    })
  }
}
