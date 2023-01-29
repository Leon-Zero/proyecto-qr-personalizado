import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {


  constructor( private qrService: QrValuesService ) { }
  
  icono: string= "";
  sizeIcon: number= 5;


  ngOnInit(): void { 
    this.qrService.observableIcon.subscribe(response =>{
      this.icono = response;
    });
    this.qrService.observableSizeIcon.subscribe(response =>{
      this.sizeIcon = response;
    });
   }
}
