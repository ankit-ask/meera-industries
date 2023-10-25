import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _router: Router) {}

  showMenu = false;
  menuItems = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Containers',
      url: '/products/round-containers',
    },
    {
      title: 'HDPE Bottles',
      url: '/products/hdpe-bottles',
    },
    {
      title: 'HDPE Toys',
      url: '/products/hdpe-toys',
    },
    {
      title: 'BOPP Tapes',
      url: '/products/bopp-tapes',
    },
    {
      title: 'Paper Napkins',
      url: '/products/paper-napkins',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goToPage(url: string) {
    this._router.navigate([url]);
    this.showMenu = false;
  }
}
