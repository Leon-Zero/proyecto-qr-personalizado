import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-wraping-form',
  templateUrl: './qr-wraping-form.component.html',
  styleUrls: ['./qr-wraping-form.component.css']
})
export class QrWrapingFormComponent implements OnInit {

  setField: number = 0;
  wraping = "not_selection";
  valSize: number = 150;
  wrapingClass = {
    "clasico": [
      { "name": "movil" }, 
    ],
    "moderno": [
      { "name": "party" }, { "name": "neon" }, { "name": "scan" }, { "name": "colors" }, { "name": "china" },
      { "name": "laser" }, { "name": "estambre" }, { "name": "black-ig" }, { "name": "twitter" }, { "name": "video" },

    ],
    "animales": [
      { "name": "rabbit" }, { "name": "ciervo" }, { "name": "lobo" }, { "name": "oso_pardo" },
      { "name": "pinguino" }, { "name": "pig" }, { "name": "dog" }, { "name": "mapache" },
      { "name": "bear" }, { "name": "cat" },
      
    ],
    "dibujo": [
      { "name": "shop" }, { "name": "dinner" }, { "name": "game" }, { "name": "energy" }, { "name": "universe" }, { "name": "road" }
    ]
  }

  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void {
    this.qrService.observableWraping.subscribe(response => {
      this.wraping = response;
    });
    this.qrService.observableWidth.subscribe(response => {
      this.valSize = response;
    });
  }

  sendWraping(wraping: string) {
    var calcSize= (this.valSize /10) + 10;
      this.qrService.sendWraping(wraping);
      this.qrService.sendSizeWrap(calcSize);
  }

  onField(select: number){
    this.setField = select;
  }

  clearWrap(){
      this.qrService.sendWraping('not_selection');
      this.qrService.sendSizeWrap(15);
    }
}
