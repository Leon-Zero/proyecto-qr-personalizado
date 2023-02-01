import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  mail: string = "leon.cba09@gmail.com";
  asunto: string = " Genex QR - Proyecto QR personalizado";
  autoResponse: string= "Muchas gracias por escribir, su consulta será analizada y me estaré comunicando a la brevedad. Atte.: Leonardo Ismael Hidalgo. Developer full stack training.";
  return: string= "https://genex-qr.web.app";

  ngOnInit(): void {
  }

}
