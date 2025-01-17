import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <nav>
      <a [routerLink]="'/'">Home</a>
      <a [routerLink]="'/about'">About</a>
      <a [routerLink]="'/contact'">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
