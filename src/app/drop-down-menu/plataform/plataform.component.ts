import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/servicios/cargar-script.service';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-plataform',
  templateUrl: './plataform.component.html',
  styleUrls: ['./plataform.component.css']
})

export class PlataformComponent implements OnInit {

  constructor( public qrService: QrValuesService,
               private cargaScript: CargarScriptService ) {
                  cargaScript.carga(['iconPlataform'])
              }

  valueIcon: string ="";
  name: string ="WEBS";
  path: string ="";

  iconos ={
  "icons": [
  {
  "name": "youtube",
  "path": "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
  "index": 0,
  "css":"fa-brands fa-youtube youtube",
  },
  {
  "name": "discord",
  "path": "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z",
  "index": 100,
  "css":"fa-brands fa-discord discord",
  },
  {"name": "tiktok",
    "path": "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
    "index": 200,
    "css": "fa-brands fa-tiktok tiktok"
  },
  {"name": "steam",
    "path": "M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z",
    "index": 300,
    "css": "fa-brands fa-steam-symbol steam"
  }
  ]
  };


  ngOnInit(): void {  }

  root = document.documentElement;

  setDropdownProps = (deg: number, ht: number, opacity: string) => {
    let setDeg: string = deg + 'deg';
    let ceroDeg: string = '0deg';
    let setHt: string = ht + 'rem';
    let ceroHt: string = '0rem';
    this.root.style.setProperty("--rotate-arrow-plataform", setDeg !== ceroDeg? setDeg : '0' );
    this.root.style.setProperty("--dropdown-height-plataform", setHt !== ceroHt ? setHt : '0');
    this.root.style.setProperty("--list-opacity-plataform", opacity);
  };

  dropdownBtn(){
    const listWrapperSizes = 3.5; // margins, paddings & borders
    const dropdownOpenHeight = 4.6 *  this.iconos.icons.length + listWrapperSizes;
    const currDropdownHeight = this.root.style.getPropertyValue("--dropdown-height-plataform") || "0";

    currDropdownHeight === "0"? this.setDropdownProps(180, dropdownOpenHeight, '1')
      : this.setDropdownProps(0, 0, '0');
  };

  svgIcon(path: string, name: string, css: string){ 
    this.name = name;
    this.path = path;    
    this.setDropdownProps(0, 0, '0');
    this.qrService.sendIcon(css);
  };

}