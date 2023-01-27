import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-type-form',
  templateUrl: './qr-type-form.component.html',
  styleUrls: ['./qr-type-form.component.css']
})
export class QrTypeFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  type: string = "url"

  ngOnInit(): void {
    this.qrService.observableType.subscribe(response =>{
      this.type = response;
    });
  }

  sendType(type: string) {
    this.qrService.sendType(type);
  }

}
