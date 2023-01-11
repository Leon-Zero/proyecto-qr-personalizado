import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-data-texto-form',
  templateUrl: './qr-data-texto-form.component.html',
  styleUrls: ['./qr-data-texto-form.component.css']
})
export class QrDataTextoFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  texto: string ="";

  ngOnInit(): void {  }

  sendUrl(texto: string){
    this.qrService.sendUrl(texto);
  }
}
