import { Component, input } from '@angular/core';
import { ClinicConfig } from '../../models/clinic-config.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  config = input.required<ClinicConfig>();
  waLink = input.required<string>();
  
  // Definimos la ruta aquí para asegurar que Angular la maneje como un recurso estático
  logoPath = 'assets/logo.png';
}
