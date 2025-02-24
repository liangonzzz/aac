import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule]
})
export class SidebarComponent {
  isSidebarOpen = false;

  @Output() sidebarStateChange = new EventEmitter<boolean>();

  // ✅ Definir menuItems para evitar el error en la plantilla
  menuItems = [
    { name: 'Mi tablero', icon: 'fas fa-home' },
    { name: 'Organizaciones', icon: 'fa fa-industry' },
    { name: 'Perfil', icon: 'fas fa-user' },
    { name: 'Configuración', icon: 'fas fa-cog' },
    { name: 'Ayuda', icon: 'fas fa-question-circle' }
  ];

  // ✅ Variable para saber qué elemento está seleccionado
  selectedItem: number | null = null;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarStateChange.emit(this.isSidebarOpen);
  }


  // ✅ Método para seleccionar un ítem del menú
  selectItem(index: number) {
    this.selectedItem = index;
  }
}
