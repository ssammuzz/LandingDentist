import { Component } from '@angular/core';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  template: `<app-home></app-home>`,
})
export class App {}
