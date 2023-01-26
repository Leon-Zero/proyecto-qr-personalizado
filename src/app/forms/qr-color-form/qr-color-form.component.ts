import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-color-form',
  templateUrl: './qr-color-form.component.html',
  styleUrls: ['./qr-color-form.component.css']
})
export class QrColorFormComponent implements OnInit {

  light: string = "#e8e8e8";
  dark: string = "";
  constructor(public qrService: QrValuesService) { }
  
  ngOnInit(): void {
    this.qrService.observableLight.subscribe(response =>{
      this.light = response;
    });
    this.qrService.observableDark.subscribe(response =>{
      this.dark = response;
    });
  }

  sendDark(dark: string){
    this.qrService.sendDark(dark);
  }
  sendLight(light: string){
    this.qrService.sendLight(light);
  }

}
