import { Component } from '@angular/core';
import { JsonFormatterComponent } from '../../../pages';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [JsonFormatterComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
