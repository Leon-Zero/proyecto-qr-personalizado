import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goQr(){
    location.replace('http://localhost:4200/');
  }
  goAcercaDe(){
    this.router.navigate(['acerca-del-proyecto']);
  }
  goConsejos(){
    this.router.navigate(['consejos-utiles']);
  }
  goContacto(){
    this.router.navigate(['contacto']);
  }

}
