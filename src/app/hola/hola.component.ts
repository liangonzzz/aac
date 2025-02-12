import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLoginComponent } from '../shared/input-login/input-login.component';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hola',
  standalone: true,
  imports: [CommonModule, InputLoginComponent, ReactiveFormsModule],
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.scss']
})
export class HolaComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({ // ✅ Usa FormBuilder correctamente
      documentNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Getters para acceder a los controles como FormControl directamente
  get documentNumber(): FormControl {
    return this.loginForm.get('documentNumber') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
