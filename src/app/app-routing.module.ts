import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsejosComponent } from './pages/consejos/consejos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consejos-utiles', component: ConsejosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
