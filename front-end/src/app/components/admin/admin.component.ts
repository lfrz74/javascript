import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [Animations]
})
export class AdminComponent implements OnInit {
  public _identity: any;
  @HostBinding('@anim-admin') animAdmin;


  constructor(private _auth: AuthService, private _router: Router) { 
    this._identity = JSON.parse(sessionStorage.getItem('identity_user'));
  }

  ngOnInit() {
  }

  logout() {
    this._auth.logOut();
    this._router.navigate(['/login'])
  }
}
