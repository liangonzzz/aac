import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',  // Este es el nombre que usarás en las páginas
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Default Label'; // Texto del botón
  @Input() type: 'button' | 'submit' = 'button'; // Tipo de botón (default 'button')
}
