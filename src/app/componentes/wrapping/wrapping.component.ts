import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-wrapping',
  templateUrl: './wrapping.component.html',
  styleUrls: ['./wrapping.component.css']
})
export class WrappingComponent implements OnInit {

  wrapingValues: string= "not_selection";
  sizeWrapValues: number=60;

  constructor(private qrService: QrValuesService) { } 

  ngOnInit(): void { 
    this.qrService.observableWraping.subscribe(response =>{
      this.wrapingValues = response;
    });
    this.qrService.observableSizeWrap.subscribe(response =>{
      this.sizeWrapValues = response;
    });
  }

}
