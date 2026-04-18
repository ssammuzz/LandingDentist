import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promociones',
  standalone: true,
  templateUrl: './promociones.html',
  styleUrl: './promociones.css'
})
export class Promociones {
  @Input() waLink!: string;
}
