import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Navbar_Items } from '../../constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  navbarItems = Navbar_Items;

  ngOnInit(): void {
    console.log(this.navbarItems, 'navbar');
  }
}
