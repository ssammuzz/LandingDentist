import { Component, input, computed } from '@angular/core';
import { ClinicConfig } from '../../models/clinic-config.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  config = input.required<ClinicConfig>();
  
  currentYear = computed(() => new Date().getFullYear());
}
