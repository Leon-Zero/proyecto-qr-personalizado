import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptService } from 'src/app/servicios/cargar-script.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor( private router: Router, private cargaScript: CargarScriptService) { }

  ngOnDestroy(): void {
    this.cargaScript.removeScript('iconDevs');
    this.cargaScript.removeScript('iconFinance');
    this.cargaScript.removeScript('iconPlataform');
    this.cargaScript.removeScript('iconSocial');
  }

  ngOnInit(): void {
    this.ngOnDestroy();
    this.onCargaScript()   
  }

  goQr(){
    location.replace('https://genex-qr.web.app');
  }
  goAcercaDe(){
    this.ngOnDestroy();
    this.router.navigate(['acerca-del-proyecto']);
  }
  goConsejos(){
    this.ngOnDestroy();
    this.router.navigate(['consejos-utiles']);
  }
  goContacto(){
    this.ngOnDestroy();
    this.router.navigate(['contacto']);
  }

  onCargaScript(){

    this.cargaScript.loadScript('iconDevs', 'iconDevs')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));

this.cargaScript.loadScript('iconFinance', 'iconFinance')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));

this.cargaScript.loadScript('iconPlataform', 'iconPlataform')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));

this.cargaScript.loadScript('iconSocial', 'iconSocial')
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

}
