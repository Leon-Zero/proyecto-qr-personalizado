import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-data-vcard-form',
  templateUrl: './qr-data-vcard-form.component.html',
  styleUrls: ['./qr-data-vcard-form.component.css']
})
export class QrDataVcardFormComponent implements OnInit {

  constructor(public qrService: QrValuesService) { }

  nombre: string = "";
  apellido: string = "";
  telCasa: string = "";
  celular: string = "";
  direccion: string = "";
  pais: string = "";
  provincia: string = "";
  ciudad: string = "";
  cp: number = 0;
  extendDir: string = "";
  empresa: string = "";
  titulo: string = "";
  telTrabajo: string = "";
  fax: string = "";
  notas: string = "";
  nacimiento: string = "";
  email: string = "";
  url: string = "";
  vCardFormat: string = "";


  ngOnInit(): void {

  }

  nombreValue(nombre: string) {
    this.nombre = nombre;
  }
  apellidoValue(apellido: string) {
    this.apellido = apellido;
  }
  telCasaValue(casa: string) {
    this.telCasa = casa;
  }
  celularValue(cel: string) {
    this.celular = cel;
  }
  direccionValue(dire: string) {
    this.direccion = dire;
  }
  extendDirValue(ext: string) {
    this.extendDir = ext;
  }
  paisValue(pais: string) {
    this.pais = pais;
  }
  provinciaValue(prov: string) {
    this.provincia = prov;
  }
  ciudadValue(ciudad: string) {
    this.ciudad = ciudad;
  }
  cpValue(cp: number) {
    this.cp = cp;
  }
  empresaValue(empresa: string) {
    this.empresa = empresa;
  }
  tituloValue(titulo: string) {
    this.titulo = titulo;
  }
  telTrabajoValue(telT: string) {
    this.telTrabajo = telT;
  }
  faxValue(fax: string) {
    this.fax = fax;
  }
  notasValue(notas: string) {
    this.notas = notas;
  }
  nacimientoValue(naci: string) {
    this.nacimiento = naci;
  }
  emailValue(email: string) {
    this.email = email;
  }
  urlValue(url: string) {
    this.url = url;
  }

  sendVCard() {
    if (this.nombre !== "") {
      this.vCardFormat = "BEGIN:VCARD" +
      "\nVERSION:3.0";
    if (this.apellido !== "") {
      this.vCardFormat += "\nN:" + this.apellido + ";";
    } else {
      this.vCardFormat += "\nN:";
    }
    this.vCardFormat += this.nombre + ";" +
      "\nFN:" + this.nombre + " " + this.apellido;
    if (this.empresa !== "") {
      this.vCardFormat += "\nORG:" + this.empresa;
    }
    if (this.titulo !== "") {
      this.vCardFormat += "\nTITLE:" + this.titulo;
    }
    if (this.telCasa !== "") {
      this.vCardFormat += "\nTEL;TYPE=HOME,VOICE:" + this.telCasa;
    }
    if (this.telTrabajo !== "") {
      this.vCardFormat += "\nTEL;TYPE=WORK,VOICE:" + this.telTrabajo;
    }
    if (this.fax !== "") {
      this.vCardFormat += "\nTEL;TYPE=WORK,FAX:" + this.fax;
    }
    if (this.celular !== "") {
      this.vCardFormat += "\nTEL;TYPE=CELL:" + this.celular;
    }
    if (this.extendDir || this.direccion || this.ciudad || this.provincia || this.cp || this.pais !== "" || 0) {
      this.vCardFormat += "\nADR;TYPE=HOME:;";
      if (this.extendDir !== "") {
        this.vCardFormat += this.extendDir + ";";
      } else {
        this.vCardFormat += ";";
      }
      if (this.direccion !== "") {
        this.vCardFormat += this.direccion + ";";
      } else {
        this.vCardFormat += ";";
      }
      if (this.ciudad !== "") {
        this.vCardFormat += this.ciudad + ";";
      } else {
        this.vCardFormat += ";";
      }
      if (this.provincia !== "") {
        this.vCardFormat += this.provincia + ";";
      } else {
        this.vCardFormat += ";";
      }
      if (this.cp !== 0) {
        this.vCardFormat += "C.P.:" + this.cp + ";";
      } else {
        this.vCardFormat += ";";
      }
      if (this.pais !== "") {
        this.vCardFormat += this.pais;
      }
    }
    if (this.notas !== "") {
      this.vCardFormat += "\nNOTE:" + this.notas;
    }
    if (this.nacimiento !== "") {
      this.vCardFormat += "\nBDAY:" + this.nacimiento;
    }
    if (this.email !== "") {
      this.vCardFormat += "\nEMAIL:" + this.email;
    }
    if (this.url !== "") {
      this.vCardFormat += "\nURL:" + this.url;
    }
    this.vCardFormat += "\nEND:VCARD";
    console.log(this.vCardFormat);
    this.qrService.sendUrl(this.vCardFormat);
  }
  else{
    alert('El campo Nombre* es requerido')
  }
      
    }
    

}
