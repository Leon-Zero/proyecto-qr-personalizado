import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-wraping-form',
  templateUrl: './qr-wraping-form.component.html',
  styleUrls: ['./qr-wraping-form.component.css']
})
export class QrWrapingFormComponent implements OnInit {
  wraping = "";
  wrapingClass = {
    "wraping": [
      { "name": "not_selection" }, { "name": "party" }, { "name": "neon" }, { "name": "solar" },
      { "name": "monitor" }, { "name": "movil" }, { "name": "rabbit" }, { "name": "laser" },
      { "name": "china" }, { "name": "rustico" }, { "name": "vintage" }, { "name": "road" },
      { "name": "scan" }, { "name": "colors" }
    ]
  }

  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void {
  }

  sendWraping(wraping: string) {
    this.qrService.sendWraping(wraping);
  }

}
