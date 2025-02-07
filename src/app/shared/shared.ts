// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent], 
  exports: [ButtonComponent],
  imports: [CommonModule,
            ButtonModule
  ]
})

export class SharedModule {}
