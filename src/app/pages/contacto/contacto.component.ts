import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private contactoService: ContactoService ) { }

  asunto: string = "Genex QR - Proyecto QR personalizado";

  addFormsubmit = new FormGroup ({
    nombre: new FormControl(''),
    email: new FormControl(''),
    asunto: new FormControl(''),
    _subject: new FormControl(this.asunto),
    _template: new FormControl('box')
  });

  ngOnInit(): void {
  }

  sendForm(){
    this.contactoService.sendMail(this.addFormsubmit.value);
  }

}
