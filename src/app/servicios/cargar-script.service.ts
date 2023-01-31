import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }

	public loadScript(id: string, url: string) {
        return new Promise((resolve, reject) => {
        if(id && document.getElementById(id)) {
            resolve({id: id, loaded: true, status: 'Already Loaded'});
        }
        let body =  document.body;
        let script = document.createElement('script');
        script.src = "./assets/jscript_dropmenu/" + url + ".js";
        script.type = 'text/javascript';
        script.innerHTML = '';
        script.id = id;
        script.onload =() => {
            resolve({id: id, loaded: true, status: 'Loaded'});
        };
        script.onerror = (error: any) => resolve({id: id, loaded: false, status: 'Loaded'});
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    });
    }

    public removeScript(id: string) {
        let script = document.getElementById(id);
        if(script) {
            script.remove();
            console.log('se ha destruido el script '+ id);
        }
    }

}
