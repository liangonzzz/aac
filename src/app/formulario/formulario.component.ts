import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importa SharedModule para usar componentes de PrimeNG
import { SharedModule } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
// Reemplaza InputTextareaModule por SharedModule
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    SharedModule,
    ButtonModule
  ]
})
export class FormularioComponent implements OnInit {
  organizationForm: FormGroup;
  adminOptions = [
    { name: 'Usuario 1', value: 'user1' },
    { name: 'Usuario 2', value: 'user2' }
  ];

  // Si planeas usar sidebar-expanded, define esta propiedad
  isSidebarExpanded: boolean = false;

  constructor(private fb: FormBuilder) {
    this.organizationForm = this.fb.group({
      businessName: ['', Validators.required],
      description: ['', Validators.required],
      nit: ['', Validators.required],
      rut: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      admin: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.organizationForm.valid) {
      console.log('Formulario enviado:', this.organizationForm.value);
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos requeridos.');
    }
  }

  onUpload(event: any) {
    console.log('Archivo subido:', event.files);
  }
}
