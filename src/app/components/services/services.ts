import { Component, input } from '@angular/core';
import { DentalService } from '../../models/dental-service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = input.required<DentalService[]>();
  waLink = input.required<string>();
}
