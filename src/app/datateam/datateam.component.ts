import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-datateam',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule
  ],
  templateUrl: './datateam.component.html',
  styleUrls: ['./datateam.component.scss']
})
export class DatateamComponent {

  documentNumber: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  async onSubmit() {
    if (!this.documentNumber || !this.password) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    try {
      // Esperamos la autenticación
      const isAuthenticated = await this.authService.login(this.documentNumber, this.password).toPromise();

      if (isAuthenticated) {
        // Si la autenticación es exitosa, redirige
        this.router.navigate(['/login-restablecer-1']);
      } else {
        this.errorMessage = 'Número de identificación o contraseña incorrectos.';
      }
    } catch (error) {
      console.error('Error:', error);
      this.errorMessage = 'Error al cargar los datos de usuario.';
    }

    // Limpia el mensaje de error después de 1.5 segundos
    setTimeout(() => {
      this.errorMessage = '';
    }, 1500);
  }
}
