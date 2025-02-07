import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared'; // Asegúrate de que la ruta sea correcta

// prime
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-datateam',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    SharedModule
  ],
  templateUrl: './datateam.component.html',
  styleUrls: ['./datateam.component.scss']
  })
  export class DatateamComponent {
    loginForm: FormGroup;
    showError: boolean = false; // Controla la visibilidad del mensaje de error
    private errorTimeout: any; // Almacena el timeout para el mensaje de error

    constructor(private router: Router, private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        documentNumber: ['', Validators.required], // Campo obligatorio
        password: ['', Validators.required] // Campo obligatorio
      });
    }

    onSubmit() {
      // Verifica si los campos están vacíos
      if (this.loginForm.invalid) {
        this.showError = true; // Muestra el mensaje de error

        // Cancela el timeout anterior si existe
        if (this.errorTimeout) {
          clearTimeout(this.errorTimeout);
        }

        // Oculta el mensaje de error después de 1500 ms
        this.errorTimeout = setTimeout(() => {
          this.showError = false;
        }, 1500);
      } else {
        this.showError = false; // Oculta el mensaje de error
        this.router.navigate(['/login-restablecer-1']); // Navega al siguiente componente
      }
    }

  }
