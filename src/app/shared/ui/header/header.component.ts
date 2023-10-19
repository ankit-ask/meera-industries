import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
}
