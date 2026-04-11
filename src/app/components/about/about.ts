import { Component, input } from '@angular/core';
import { ClinicConfig } from '../../models/clinic-config.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  config = input.required<ClinicConfig>();
  waLink = input.required<string>();
}
