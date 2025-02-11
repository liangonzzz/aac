import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss']
})
export class InputLoginComponent {
  @Input() label!: string;        // Etiqueta del input
  @Input() type: string = 'text'; // Tipo de input (text, password, etc.)
  @Input() placeholder!: string;  // Placeholder del input
  @Input() icon?: string;         // Icono (opcional)
  @Input() control!: FormControl; // FormControl del input
}
