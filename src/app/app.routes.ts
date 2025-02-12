import { Routes } from '@angular/router';
import { DatateamComponent } from './datateam/datateam.component';
import { LoginRestablecerComponent } from './login-restablecer/login-restablecer.component';
import { LoginRestablecer1Component } from './login-restablecer-1/login-restablecer-1.component';
import { PantallaCreacionComponent } from './pantalla-creacion/pantalla-creacion.component';
import { LoginPrincipalComponent } from './login-principal/login-principal.component';
import { HolaComponent } from './hola/hola.component';
import { ConfiContraComponent } from './confi-contra/confi-contra.component';
import { ConfiCorrComponent } from './confi-corr/confi-corr.component';


export const routes: Routes = [
  { path: 'datateam', component: DatateamComponent },
  { path: 'login-restablecer', component: LoginRestablecerComponent },
  { path: 'login-restablecer-1', component: LoginRestablecer1Component },
  { path: 'pantalla-creacion', component: PantallaCreacionComponent },
  { path: 'login-principal', component: LoginPrincipalComponent },
  { path: 'hola', component: HolaComponent },
  { path: 'confi-contra', component: ConfiContraComponent },
  { path: 'confi-corr', component: ConfiCorrComponent },
  { path: '', redirectTo: '/datateam', pathMatch: 'full' }
];
