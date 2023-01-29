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
      { "name": "bear" },
      
    ],
    "dibujo": [
      { "name": "shop" }, { "name": "dinner" }, { "name": "game" }, { "name": "road" }
    ]
  }

  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void {
    this.qrService.observableWraping.subscribe(response => {
      this.wraping = response;
    });
  }

  sendWraping(wraping: string) {
    if (this.qrService.sizeWrapValue > 26) {
      this.qrService.sendWraping(wraping);
    } else {
      this.qrService.sendWraping(wraping);
      this.qrService.sendSizeWrap(26);
    }
  }

  onField(select: number){
    this.setField = select;
  }

  clearWrap(){
      this.qrService.sendWraping('not_selection');
      this.qrService.sendSizeWrap(15);
    }
}
