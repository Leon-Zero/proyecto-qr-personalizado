import { Component, OnInit } from '@angular/core';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-correction-level-form',
  templateUrl: './qr-correction-level-form.component.html',
  styleUrls: ['./qr-correction-level-form.component.css']
})
export class QrCorrectionLevelFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  H= NgxQrcodeErrorCorrectionLevels.HIGH;
  Q= NgxQrcodeErrorCorrectionLevels.QUARTILE;
  M= NgxQrcodeErrorCorrectionLevels.MEDIUM;
  L= NgxQrcodeErrorCorrectionLevels.LOW;
  CorrectionLevel: any = NgxQrcodeErrorCorrectionLevels.HIGH;

  ngOnInit(): void {
  }
  sendCorrectionL(correctionL: NgxQrcodeErrorCorrectionLevels){
    this.qrService.sendCorrectionL(correctionL);
  }

}
