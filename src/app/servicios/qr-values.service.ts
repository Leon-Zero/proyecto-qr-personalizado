import { Injectable } from '@angular/core';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode/lib/qrcode.types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrValuesService {

  iconValue: string = "";
  urlValue: string = "";
  widthValue: number = 0;
  sizeIconValue: number = 0;
  sizeWrapValue: number = 0;
  darkValue: string = "";
  lightValue: string = "";
  wrapingValue: string = "";
  correctionLValue!: NgxQrcodeErrorCorrectionLevels;
  typeValue: string = "url";

  private sendValueIcon = new Subject<string>();
  private sendValueUrl = new Subject<string>();
  private sendValueWidth = new Subject<number>();
  private sendValueSizeIcon = new Subject<number>();
  private sendValueSizeWrap = new Subject<number>();
  private sendValueDark = new Subject<string>();
  private sendValueLight = new Subject<string>();
  private sendValueWraping = new Subject<string>();
  private sendValueCorrectionL = new Subject<any>();
  private sendValueType = new Subject<any>();




  observableIcon = this.sendValueIcon.asObservable();
  observableUrl = this.sendValueUrl.asObservable();
  observableWidth = this.sendValueWidth.asObservable();
  observableSizeIcon = this.sendValueSizeIcon.asObservable();
  observableSizeWrap = this.sendValueSizeWrap.asObservable();
  observableDark = this.sendValueDark.asObservable();
  observableLight = this.sendValueLight.asObservable();
  observableWraping = this.sendValueWraping.asObservable();
  observableCorrectionL = this.sendValueCorrectionL.asObservable();
  observableType = this.sendValueType.asObservable();



  constructor() { }

  sendIcon(icon: string) {
    this.iconValue = icon;
    this.sendValueIcon.next(icon);
  }
  sendUrl(url: string) {
    this.urlValue = url;
    this.sendValueUrl.next(url)
  }
  sendWidth(width: number) {
    this.widthValue = width;
    this.sendValueWidth.next(width);
  }
  sendSizeIcon(sizeIcon: number) {
    this.sizeIconValue = sizeIcon;
    this.sendValueSizeIcon.next(sizeIcon);
  }
  sendSizeWrap(sizeWrap: number) {
    this.sizeWrapValue = sizeWrap;
    this.sendValueSizeWrap.next(sizeWrap);
  }
  sendDark(dark: string) {
    this.darkValue = dark;
    this.sendValueDark.next(dark);
  }
  sendLight(light: string) {
    this.lightValue = light;
    this.sendValueLight.next(light);
  }
  sendWraping(wraping: string) {
    this.wrapingValue = wraping;
    this.sendValueWraping.next(wraping);
  }
  sendCorrectionL(correction: NgxQrcodeErrorCorrectionLevels) {
    this.correctionLValue = correction;
    this.sendValueCorrectionL.next(correction);
  }
  sendType(type: string) {
    this.typeValue = type;
    this.sendValueType.next(type);
  }
}
