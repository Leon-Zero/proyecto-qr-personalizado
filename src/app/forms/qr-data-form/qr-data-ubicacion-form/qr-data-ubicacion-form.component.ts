import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-data-ubicacion-form',
  templateUrl: './qr-data-ubicacion-form.component.html',
  styleUrls: ['./qr-data-ubicacion-form.component.css']
})
export class QrDataUbicacionFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  latitud: number = 0;
  longitud: number = 0;
  ubication: string = "";


  ngOnInit(): void {
  }

  latitudValue(latitud: number){
    this.latitud = latitud;
  }
  longitudValue(longitud: number){
    this.longitud = longitud;
  }
  sendUbication(){
    this.ubication = 'https://maps.google.com/?q=' + this.latitud + ',' + this.longitud;
    this.qrService.sendUrl(this.ubication);
  }

}
