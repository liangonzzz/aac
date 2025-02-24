import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { OrganizationsTableComponent } from "../organizaciones/organizations-table.component";

@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, OrganizationsTableComponent],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.css'
})
export class TablasComponent {
  isSidebarExpanded = false;

  onSidebarStateChange(isExpanded: boolean) {
    this.isSidebarExpanded = isExpanded;
  }
}
