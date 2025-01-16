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
    { label: 'Cédula de Extranjería', value: 'ce' }
  ];

  selectedDocumentType: string | null = null;
  password: string = '';  // Definir la propiedad para la contraseña

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación si es necesario
    this.router.navigate(['/login-restablecer-1']);
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }
}