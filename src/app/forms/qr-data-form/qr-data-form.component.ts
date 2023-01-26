import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-data-form',
  templateUrl: './qr-data-form.component.html',
  styleUrls: ['./qr-data-form.component.css']
})


export class QrDataFormComponent implements OnInit {

url: string = "";


  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void { 
    this.qrService.observableUrl.subscribe(response =>{
      this.url = response;
  });
   }

  sendUrl(url: string){
    this.qrService.sendUrl(url);
  }
}
