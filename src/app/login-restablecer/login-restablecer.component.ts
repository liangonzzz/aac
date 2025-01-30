import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// prime
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login-restablecer',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    MessageModule
  ],
  templateUrl: './login-restablecer.component.html',
  styleUrls: ['./login-restablecer.component.css']
})
export class LoginRestablecerComponent {
  email: string = '';  // Definir la propiedad para el correo electrónico
  errorMessage: string = '';  // Mensaje de error

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email) {
      this.errorMessage = '¡Ingrese su correo electrónico!';  // Mensaje de error si el campo está vacío

      // Temporizador para ocultar el mensaje de error después de 1500 ms
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000);

      return;
    }

    this.errorMessage = '';  // Limpiar el mensaje de error si todo está correcto
    this.router.navigate(['/login-restablecer-1']);  // Navegar a la ruta de restablecer 1
  }

  navigateToDatateam() {
    this.router.navigate(['/datateam']);
  }
}
