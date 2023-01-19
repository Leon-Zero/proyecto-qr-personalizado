import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {

  constructor(private qrService: QrValuesService) { }

  type:string = 'url';

  ngOnInit(): void {
    this.qrService.observableType.subscribe(response =>{
      this.type = response;
    });
  }

}
