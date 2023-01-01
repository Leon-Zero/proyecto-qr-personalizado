import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/servicios/cargar-script.service';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(public qrService: QrValuesService,
              private cargaScript: CargarScriptService) {
              cargaScript.carga(['iconFinance'])
            }

  valueIcon: string = "";
  name: string = "FINANZAS";
  path: string = "";

  iconos = {
    "icons": [
      {
        "name": "paypal",
        "path": "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z",
        "index": 0,
        "css": "fa-brands fa-paypal paypal"
      },
      {
        "name": "credit",
        "path": "M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z",
        "index": 100,
        "css": "fa-regular fa-credit-card credit"
      }
    ]
  };


  ngOnInit(): void { }

  root = document.documentElement;

  setDropdownProps = (deg: number, ht: number, opacity: string) => {
    let setDeg: string = deg + 'deg';
    let ceroDeg: string = '0deg';
    let setHt: string = ht + 'rem';
    let ceroHt: string = '0rem';
    this.root.style.setProperty("--rotate-arrow-finance", setDeg !== ceroDeg ? setDeg : '0');
    this.root.style.setProperty("--dropdown-height-finance", setHt !== ceroHt ? setHt : '0');
    this.root.style.setProperty("--list-opacity-finance", opacity);
  };

  dropdownBtn() {
    const listWrapperSizes = 3.5; // margins, paddings & borders
    const dropdownOpenHeight = 4.6 * this.iconos.icons.length + listWrapperSizes;
    const currDropdownHeight = this.root.style.getPropertyValue("--dropdown-height-finance") || "0";

    currDropdownHeight === "0" ? this.setDropdownProps(180, dropdownOpenHeight, '1')
      : this.setDropdownProps(0, 0, '0');
  };

  svgIcon(path: string, name: string, css: string) {
    this.name = name;
    this.path = path;
    this.setDropdownProps(0, 0, '0');
    this.qrService.sendIcon(css);
  };

}
