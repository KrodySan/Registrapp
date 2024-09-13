import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  seccionSeleccionada: string = ''; // Nueva propiedad para rastrear la sección seleccionada

  constructor() {}
}
