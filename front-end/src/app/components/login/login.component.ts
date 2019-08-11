import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario:any={}; //Objeto vacío
  
  constructor(private _serviceLogin: LoginService ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.usuario.usuario);
    console.log(this.usuario.password);
    this._serviceLogin.login(this.usuario)
    .then(res =>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
