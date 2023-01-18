import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import html2canvas from 'html2canvas';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-contenedor',
  templateUrl: './qr-contenedor.component.html',
  styleUrls: ['./qr-contenedor.component.css']
})
export class QrContenedorComponent implements OnInit {

  constructor( public qrService: QrValuesService) { }
  elementType = NgxQrcodeElementTypes.URL;
  url=''
  margin = 0;
  width= 200;
  dark="";
  light="";
  class="qr-image";
  errorCorrectionLevel= NgxQrcodeErrorCorrectionLevels.HIGH;
  scale=2000;

  ngOnInit(): void {
    this.qrService.observableUrl.subscribe(response =>{
      this.url = response;
  });
  this.qrService.observableWidth.subscribe(response =>{
    this.width = response;
  });
  this.qrService.observableDark.subscribe(response => {
    this.dark = response;
  });
  this.qrService.observableLight.subscribe(response => {
    this.light = response;
  });
  this.qrService.observableCorrectionL.subscribe(response => {
    this.errorCorrectionLevel= response;
  });
  }
  convertToIMG(){
    let element= document.getElementById('capture') as HTMLElement;
    html2canvas(element, {backgroundColor:"null", scale:2.5}).then(canvas => {
      let enlace = document.createElement('a');
      enlace.download = "CodigoQR-Leonardo Web.png";
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      enlace.click();
    });
 }

}
