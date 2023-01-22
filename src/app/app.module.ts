import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CargarScriptService } from "src/app/servicios/cargar-script.service";
import { QrValuesService } from "src/app/servicios/qr-values.service";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrContenedorComponent } from './componentes/qr-contenedor/qr-contenedor.component';
import { WrappingComponent } from './componentes/wrapping/wrapping.component';
import { IconComponent } from './componentes/icon/icon.component';
import { SocialComponent } from './drop-down-menu/social/social.component';
import { HomeComponent } from './pages/home/home.component';
import { PlataformComponent } from './drop-down-menu/plataform/plataform.component';
import { QrDataFormComponent } from './forms/qr-data-form/qr-data-form.component';
import { AcordionComponent } from './componentes/acordion/acordion.component';
import { QrColorFormComponent } from './forms/qr-color-form/qr-color-form.component';
import { QrWrapingFormComponent } from './forms/qr-wraping-form/qr-wraping-form.component';
import { DevsComponent } from './drop-down-menu/devs/devs.component';
import { FinanceComponent } from './drop-down-menu/finance/finance.component';
import { QrSizingFormComponent } from './forms/qr-sizing-form/qr-sizing-form.component';
import { QrCorrectionLevelFormComponent } from './forms/qr-correction-level-form/qr-correction-level-form.component';
import { QrTypeFormComponent } from './forms/qr-type-form/qr-type-form.component';
import { QrDataTextoFormComponent } from './forms/qr-data-form/qr-data-texto-form/qr-data-texto-form.component';
import { QrDataWifiFormComponent } from './forms/qr-data-form/qr-data-wifi-form/qr-data-wifi-form.component';
import { QrDataUbicacionFormComponent } from './forms/qr-data-form/qr-data-ubicacion-form/qr-data-ubicacion-form.component';
import { QrDataVcardFormComponent } from './forms/qr-data-form/qr-data-vcard-form/qr-data-vcard-form.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ConsejosComponent } from './pages/consejos/consejos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListExampleComponent } from './pages/consejos/componentes/list-example/list-example.component';
import { AcordionExampleComponent } from './pages/consejos/componentes/acordion-example/acordion-example.component';
import { MenuTypeExampleComponent } from './pages/consejos/componentes/menu-type-example/menu-type-example.component';

@NgModule({
  declarations: [
    AppComponent,
    QrContenedorComponent,
    WrappingComponent,
    IconComponent,
    SocialComponent,
    HomeComponent,
    PlataformComponent,
    QrDataFormComponent,
    AcordionComponent,
    QrColorFormComponent,
    QrWrapingFormComponent,
    DevsComponent,
    FinanceComponent,
    QrSizingFormComponent,
    QrCorrectionLevelFormComponent,
    QrTypeFormComponent,
    QrDataTextoFormComponent,
    QrDataWifiFormComponent,
    QrDataUbicacionFormComponent,
    QrDataVcardFormComponent,
    NavbarComponent,
    AcercaDeComponent,
    ConsejosComponent,
    ContactoComponent,
    ListExampleComponent,
    AcordionExampleComponent,
    MenuTypeExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    FormsModule
  ],
  providers: [
    CargarScriptService,
    QrValuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
