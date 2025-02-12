import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss']
})
export class InputLoginComponent {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() control!: FormControl;
}

