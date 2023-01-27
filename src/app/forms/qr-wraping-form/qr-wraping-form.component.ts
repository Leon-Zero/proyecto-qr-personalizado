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
      { "name": "not_selection" }, { "name": "party" }, { "name": "neon" }, { "name": "movil" }, { "name": "rabbit" }, { "name": "laser" },
      { "name": "china" }, { "name": "rustico" }, {"name":"video"}, { "name": "road" }, { "name": "scan" },
      { "name": "colors" }, { "name": "estambre" }, { "name": "bear" }, { "name": "black-ig" }
    ]
  }

  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void {
    this.qrService.observableWraping.subscribe(response =>{
      this.wraping = response;
    });
  }

  sendWraping(wraping: string) {
    if(wraping === "not_selection"){
    this.qrService.sendSizeWrap(18);
    }
    this.qrService.sendWraping(wraping);
    this.qrService.sendSizeWrap(26);
  }

}
