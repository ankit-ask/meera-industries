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
      title: 'Food Containers',
      url: '/products/round-containers',
    },
    {
      title: 'Wonder Tapes',
      url: '/products/wonder-tapes',
    },
    {
      title: 'Paper Napkins',
      url: '/products/paper-napkins',
    },
    {
      title: 'Printing & Packaging',
      url: '/products/print-packaging',
    },
    {
      title: 'Aluminium Foils',
      url: '/products/aluminium-foil',
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
