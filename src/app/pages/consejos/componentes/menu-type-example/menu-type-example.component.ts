import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-menu-type-example',
  templateUrl: './menu-type-example.component.html',
  styleUrls: ['./menu-type-example.component.css']
})
export class MenuTypeExampleComponent implements OnInit {

  constructor(private qrService: QrValuesService) { }

  type:string = 'url';

  ngOnInit(): void {
    this.qrService.observableType.subscribe(response =>{
      this.type = response;
    });
  }

}
