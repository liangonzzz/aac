import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-pantalla-ver',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, FormularioComponent],
  templateUrl: './pantalla-ver.component.html',
  styleUrl: './pantalla-ver.component.scss'
})
export class PantallaVerComponent {
  isSidebarExpanded = false;

  onSidebarStateChange(isExpanded: boolean) {
    this.isSidebarExpanded = isExpanded;
  }
}
