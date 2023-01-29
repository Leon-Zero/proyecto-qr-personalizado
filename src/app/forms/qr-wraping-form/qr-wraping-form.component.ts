import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-wraping-form',
  templateUrl: './qr-wraping-form.component.html',
  styleUrls: ['./qr-wraping-form.component.css']
})
export class QrWrapingFormComponent implements OnInit {
  wraping = "not_selection";
  wrapingClass = {
    "wraping": [
      { "name": "not_selection" }, { "name": "party" }, { "name": "neon" }, { "name": "movil" },
      { "name": "rabbit" }, { "name": "ciervo" }, { "name": "lobo" }, { "name": "oso_pardo" }, { "name": "pinguino" }, { "name": "pig" },
      { "name": "dog" }, { "name": "mapache" }, { "name": "laser" }, { "name": "china" },
      { "name": "video" }, { "name": "road" }, { "name": "scan" }, { "name": "colors" },
      { "name": "estambre" }, { "name": "bear" }, { "name": "black-ig" }, { "name": "twitter" },
      { "name": "shop" }, { "name": "dinner" }
    ]
  }

  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void {
    this.qrService.observableWraping.subscribe(response => {
      this.wraping = response;
    });
  }

  sendWraping(wraping: string) {
    if (wraping === "not_selection") {
      this.qrService.sendWraping(wraping);
      this.qrService.sendSizeWrap(15);
    }
    if (this.qrService.sizeWrapValue > 26) {
      this.qrService.sendWraping(wraping);
    } else {
      this.qrService.sendWraping(wraping);
      this.qrService.sendSizeWrap(26);
    }
  }

}
