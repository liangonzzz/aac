import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SuperadmiComponent } from "../asuperadmi/superadmi.component";
import { OrganizationsTableComponent } from "../organizaciones/organizations-table.component";

@Component({
  selector: 'app-pantalla',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, SuperadmiComponent, OrganizationsTableComponent],
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.scss']
})
export class PantallaComponent {
  isSidebarExpanded = false;

  onSidebarStateChange(isExpanded: boolean) {
    this.isSidebarExpanded = isExpanded;
  }
}
