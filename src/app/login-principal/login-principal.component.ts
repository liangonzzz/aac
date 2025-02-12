import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service'; // 👈 Importa el servicio

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

// Components
import { SharedModule } from '../shared/shared';
import { InputLoginComponent } from '../shared/input-login/input-login.component';

@Component({
  selector: 'app-login-principal',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SharedModule,
    InputLoginComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.scss']
})
export class LoginPrincipalComponent {
  loginForm: FormGroup;
  showError: boolean = false;
  private errorTimeout: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService // 👈 Inyecta el servicio de autenticación
  ) {
    this.loginForm = this.fb.group({
      documentNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.showErrorMessage();
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/pantalla-creacion']); // ✅ Redirigir al usuario
      },
      error: (error) => {
        console.error('Error en el login:', error);
        this.showErrorMessage();
      }
    });
  }

  private showErrorMessage() {
    this.showError = true;
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }
    this.errorTimeout = setTimeout(() => {
      this.showError = false;
    }, 1500);
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }
}
