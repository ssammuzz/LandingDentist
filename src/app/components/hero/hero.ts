import { Component, input } from '@angular/core';
import { ClinicConfig } from '../../models/clinic-config.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  config = input.required<ClinicConfig>();
  waLink = input.required<string>();
}
