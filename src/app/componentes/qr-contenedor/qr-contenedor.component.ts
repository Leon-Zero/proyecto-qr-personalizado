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
  margin = .5;
  width= 150;
  dark="";
  light="";
  errorCorrectionLevel= NgxQrcodeErrorCorrectionLevels.HIGH;
  class="qr-image";

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
    html2canvas(element, {backgroundColor:"null", scale:2}).then(canvas => {
      let enlace = document.createElement('a');
      enlace.download = "CodigoQR-Leonardo Web.png";
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      enlace.click();
    });
 }

 cleanQrValues(){
  this.qrService.sendDark('');
  this.qrService.sendLight('#ffffff');
  this.qrService.sendIcon('');
  this.qrService.sendUrl('');
  this.qrService.sendWraping('not_selection');
  this.qrService.sendWidth(150);
  this.qrService.sendSizeWrap(20);
  this.qrService.sendSizeIcon(6);
 }

}
