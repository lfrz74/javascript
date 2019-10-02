import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario:any={}; //Objeto vacío
  
  constructor(private _serviceLogin: LoginService, private _router: Router ) { 

  }

  ngOnInit() {
  }

  login(){
    this._serviceLogin.login(this.usuario)
    .then(res =>{
      localStorage.setItem('identity_user', JSON.stringify(res));
      this._router.navigate(['/admin/list']);
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
