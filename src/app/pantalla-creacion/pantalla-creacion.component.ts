import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importar FontAwesomeModule

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pantalla-creacion',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, // Agregar CommonModule
    InputTextModule,
    ButtonModule,
    FontAwesomeModule, // Agregar FontAwesomeModule
  ],
  templateUrl: './pantalla-creacion.component.html',
  styleUrls: ['./pantalla-creacion.component.css'],
})
export class PantallaCreacionComponent {
  title = 'pantalla-creacion';
  showOverlay = false;

  constructor(private router: Router) {}

  logout() {
    // Aquí puedes agregar la lógica de cierre de sesión si es necesario
    this.router.navigate(['/login-principal']);
  }
}