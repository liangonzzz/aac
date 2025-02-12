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
  selector: 'app-confi-corr',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  templateUrl: './confi-corr.component.html',
  styleUrl: './confi-corr.component.scss'
})
export class ConfiCorrComponent {
  constructor(private router: Router) {}
  redirectToLogin() {
    this.router.navigate(['/login-restablecer-1']);
  }
}

