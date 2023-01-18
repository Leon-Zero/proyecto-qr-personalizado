import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {

  constructor(private qrService: QrValuesService) { }

  type: string ="url";

  ngOnInit(): void {
    this.qrService.observableType.subscribe(response =>{
      this.type = response;
    });
  }
}
