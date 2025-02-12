import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

// Components
import { SharedModule } from '../shared/shared';

@Component({
  selector: 'app-confi-contra',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  templateUrl: './confi-contra.component.html',
  styleUrl: './confi-contra.component.scss'
})
export class ConfiContraComponent {

  constructor(private router: Router) {}
  redirectToLogin() {
    this.router.navigate(['/login-principal']);
  }
}

