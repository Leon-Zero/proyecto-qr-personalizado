import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }
  
  carga(archivos:string[]){
    for( let archivo of archivos){
      let script = document.createElement("script");
      script.src = "./assets/jscript_dropmenu/" + archivos + ".js";
      script.type = "text/javascript";
      script.async = true;
      let body = document.getElementsByTagName("head")[0];
      body.appendChild( script );
    }
  }
}
