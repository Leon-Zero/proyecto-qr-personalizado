import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/servicios/cargar-script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cargaScript: CargarScriptService){}
  ngOnInit(){
    
    this.cargaScript.carga(['iconDevs']);
    this.cargaScript.carga(['iconFinance']);
    this.cargaScript.carga(['iconPlataform']);
    this.cargaScript.carga(['iconSocial']);
  }
}
