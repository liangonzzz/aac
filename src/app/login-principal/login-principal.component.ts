import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service'; // Importa el servicio de autenticación correctamente

// prime
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login-principal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule
  ],
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.css']
})
export class LoginPrincipalComponent {
  documentTypes = [
    { label: 'Cédula de Ciudadanía', value: 'cc' },
    { label: 'Cédula de Extranjería', value: 'ce' },
    { label: 'Pasaporte', value: 'pt' }
  ];

  selectedDocumentType: { label: string, value: string } | null = null;
  documentNumber: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { } // Inyecta el servicio de autenticación

  onSubmit() {
    console.log('Document Type:', this.selectedDocumentType?.value);
    console.log('Document Number:', this.documentNumber);
    console.log('Password:', this.password);

    if (this.selectedDocumentType && this.documentNumber && this.password) {
      this.authService.login(this.selectedDocumentType.value, this.documentNumber, this.password).subscribe(
        (isAuthenticated: boolean) => { // Especifica el tipo boolean
          console.log('Authentication Result:', isAuthenticated);
          if (isAuthenticated) {
            this.router.navigate(['//pantalla-creacion']);
          } else {
            this.errorMessage = 'Tipo de documento, número de identificación o contraseña incorrectos.';
          }
        },
        (error: any) => { // Especifica el tipo any
          console.error('Error:', error);
          this.errorMessage = 'Error al cargar los datos de usuario.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
    setTimeout(() => {
      this.errorMessage = '';
    }, 1500);
  }

  onDocumentTypeChange() {
    console.log('Document Type Changed:', this.selectedDocumentType);
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }
}
