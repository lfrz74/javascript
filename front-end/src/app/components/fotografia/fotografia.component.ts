import { Component, OnInit, Input } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {
  public _url: string;
  @Input() _foto: any;
  @Input() _seleccionada: any;  
  constructor() { 
    this._url = GLOBAL.url;
  }

  ngOnInit() {
  }

}
