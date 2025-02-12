// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button/button.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [ButtonComponent], // Solo los componentes que NO sean standalone
  exports: [ButtonComponent], // Exportamos solo los que NO sean standalone
  imports: [CommonModule, ButtonModule, PasswordModule, InputTextModule]
})
export class SharedModule {}

