import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
     InputTextModule,
     ReactiveFormsModule, 
    PasswordModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule
  ],
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.scss']
})
export class LoginPrincipalComponent {
  loginForm: FormGroup;
  documentTypes = [
    { label: 'Cédula de Ciudadanía', value: 'cc' },
    { label: 'Cédula de Extranjería', value: 'ce' }
  ];

  selectedDocumentType: string | null = null;
  password: string = '';  // Definir la propiedad para la contraseña

  constructor(private router: Router,  private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      documentType: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

 
  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación si es necesario
    if (this.loginForm.valid) {
        this.router.navigate(['/pantalla-creacion']);
    } else {
      console.log('Formulario inválido');
    }
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }
}