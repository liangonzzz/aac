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

@Component({
  selector: 'app-datateam',
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
  templateUrl: './datateam.component.html',
  styleUrls: ['./datateam.component.css']
})

export class DatateamComponent {
  documentTypes = [
    { label: 'Cédula de Ciudadanía', value: 'cc' },
    { label: 'Cédula de Extranjería', value: 'ce' },
    { label: 'Pasaporte', value: 'pt' }
  ];

  selectedDocumentType: { label: string, value: string } | null = null;
  documentNumber: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Verificar si las credenciales son correctas
    if (this.selectedDocumentType?.value === 'cc' && this.documentNumber === '123456789' && this.password === '123') {
      this.router.navigate(['/login-restablecer-1']);
    } else {
      this.errorMessage = 'Tipo de documento, número de identificación o contraseña incorrectos.';
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
