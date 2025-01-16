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
  selector: 'app-login-restablecer-1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    MessageModule
  ],
  templateUrl: './login-restablecer-1.component.html',
  styleUrls: ['./login-restablecer-1.component.css']
})
export class LoginRestablecer1Component {
  title = 'login-restablecer-1';

  newPassword: string = '';      // Nueva contraseña
  confirmPassword: string = '';  // Confirmación de la contraseña
  errorMessage: string = '';     // Mensaje de error

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.newPassword || !this.confirmPassword) {
      this.errorMessage = '¡Digite su contraseña!';  // Mensaje de error si los campos están vacíos
      
      // Temporizador para ocultar el mensaje de error después de 1000 ms
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000);
      
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';  // Error si las contraseñas no coinciden
      
      // Temporizador para ocultar el mensaje de error después de 1000 ms
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000);
      
      return;
    }

    this.errorMessage = '';  // Limpiar el mensaje de error si todo está correcto
    alert('Contraseña restablecida correctamente');  // Confirmación
    this.router.navigate(['/login-principal']);  // Redirección a login-principal
  }

  navigateToDatateam() {
    this.router.navigate(['/datateam']);
  }
}