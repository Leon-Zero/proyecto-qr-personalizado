import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-data-wifi-form',
  templateUrl: './qr-data-wifi-form.component.html',
  styleUrls: ['./qr-data-wifi-form.component.css']
})
export class QrDataWifiFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  ssid: string = "";
  typeEncryption: string = "";
  password: string = "";
  passVisible: boolean = false;
  hiddenBoolean: boolean = false;
  hidden: string = "";
  wifiFormat: string = "";


  ngOnInit(): void {
  }


  ssidValue(ssid: string) {
    this.ssid = ssid;
  }
  typeEncryptionValue(encryption: string) {
    this.typeEncryption = encryption;
  }
  passwordValue(password: string) {
    this.password = password;
  }
  hiddenValue(hidden: boolean) {
    if (hidden) {
      this.hidden = 'H:true';
    }
    else {
      this.hidden = "";
    }
  }
  sendWifi() {
    if (this.ssid && this.typeEncryption && this.password !== "") {
      this.wifiFormat = "WIFI:S:" + this.ssid + ";T:" + this.typeEncryption + ";P:" + this.password + ";" + this.hidden + ";";
      this.qrService.sendUrl(this.wifiFormat);      
    } else{
      alert(' (*) Capos requeridos sin completar')
    }
   
  }
  changeVisibility(){
    this.passVisible = !this.passVisible
  }

}
