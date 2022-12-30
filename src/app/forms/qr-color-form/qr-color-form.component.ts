import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-color-form',
  templateUrl: './qr-color-form.component.html',
  styleUrls: ['./qr-color-form.component.css']
})
export class QrColorFormComponent implements OnInit {

  light: string = "#ffffff";
  dark: string = "";
  constructor(public qrService: QrValuesService) { }
  
  ngOnInit(): void {
  }

  sendDark(dark: string){
    this.qrService.sendDark(dark);
  }
  sendLight(light: string){
    this.qrService.sendLight(light);
  }

}
