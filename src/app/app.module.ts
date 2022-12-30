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
import { AcordionComponent } from './drop-down-menu/acordion/acordion.component';
import { QrColorFormComponent } from './forms/qr-color-form/qr-color-form.component';
import { QrWrapingFormComponent } from './forms/qr-wraping-form/qr-wraping-form.component';
import { DevsComponent } from './drop-down-menu/devs/devs.component';
import { FinanceComponent } from './drop-down-menu/finance/finance.component';
import { QrSizingFormComponent } from './forms/qr-sizing-form/qr-sizing-form.component';

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
