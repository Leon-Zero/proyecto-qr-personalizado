import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-sizing-form',
  templateUrl: './qr-sizing-form.component.html',
  styleUrls: ['./qr-sizing-form.component.css']
})
export class QrSizingFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  width: number = 150;
  sizeIcon: number = 6;
  sizeWrap: number = 20;

  ngOnInit(): void {
    this.qrService.observableSizeWrap.subscribe(response =>{
      this.sizeWrap = response;
    });
  }
  sendWidth(width: number){
    this.qrService.sendWidth (width);
  }
  sendSizeIcon(sizeIcon: number){
    this.qrService.sendSizeIcon(sizeIcon);
  }
  sendSizeWrap(sizeWrap: number){
    this.qrService.sendSizeWrap(sizeWrap);
  }

}

