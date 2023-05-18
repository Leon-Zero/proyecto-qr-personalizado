import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './ContactoModel';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private url = 'https://formsubmit.co/ajax/leon.cba09@gmail.com';

  constructor(private http:HttpClient) { }

  // sendMail(data:Object):Observable<Contacto>{
  //   var headers= new HttpHeaders().set('Content-Type', 'application/json')
  //   return this.http.post<Contacto>(this.url, {
  //   method: "POST",
  //   headers: { 
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  //   });
  // }

  sendMail(data: Object){
    fetch(this.url, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
}
