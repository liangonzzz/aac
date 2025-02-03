import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// prime
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-principal',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.scss']
})
export class LoginPrincipalComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      documentNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
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
