// src/app/organizaciones/organizations-table.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizations-table',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, PaginatorModule, CommonModule],
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.scss']
})
export class OrganizationsTableComponent implements OnInit {
  @Input() isSidebarExpanded: boolean = false;

  organizations: any[] = [
    { logo: '../../assets/images/datalogo.png', name: 'Datacenter', phone: '123456789', email: 'info@dcasas.com.co', admin: 'Paola Pérez', collaborators: 542, candidates: 14 },
    { logo: '../../assets/images/datalogo.png', name: 'Gelsa', phone: '111111111', email: 'admin@gelsa.com.co', admin: 'Pedro Hernández', collaborators: 542, candidates: 14 },
    { logo: '../../assets/images/datalogo.png', name: 'PagaTodo', phone: '222222222', email: 'info@pagatodo.com.co', admin: 'Pablo González', collaborators: 542, candidates: 14 },
    { logo: '../../assets/images/datalogo.png', name: 'Ubisoft', phone: '333333333', email: 'contact@ubisoft.com', admin: 'Julieta Parra', collaborators: 542, candidates: 14 },
    { logo: '../../assets/images/datalogo.png', name: 'Empresa', phone: '444444444', email: 'info@empresa.com', admin: 'Jimena Arias', collaborators: 542, candidates: 14 },
    { logo: '../../assets/images/datalogo.png', name: 'Ubisoft', phone: '333333333', email: 'contact@ubisoft.com', admin: 'Julieta Parra', collaborators: 542, candidates: 14 },
    { logo: '../../assets/images/datalogo.png', name: 'Empresa', phone: '444444444', email: 'info@empresa.com', admin: 'Jimena Arias', collaborators: 542, candidates: 14 }
  ];

  // Variables para la paginación
  paginatedOrganizations: any[] = [];
  first: number = 0;
  rows: number = 5; // Mostrar 5 registros por página
  totalRecords: number = 0;

  ngOnInit(): void {
    this.totalRecords = this.organizations.length;
    this.updatePaginatedOrganizations();
  }

  onGlobalFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    // Aquí podrías filtrar manualmente si no usas el filtro integrado de PrimeNG
  }

  // Método para manejar la paginación
  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedOrganizations();
  }

  // Actualiza los datos paginados
  private updatePaginatedOrganizations(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedOrganizations = this.organizations.slice(start, end);
  }
}
