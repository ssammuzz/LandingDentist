import { Component, input } from '@angular/core';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials = input.required<Testimonial[]>();
}
