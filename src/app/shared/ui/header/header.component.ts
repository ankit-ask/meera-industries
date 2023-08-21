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
      title: 'Food Containers',
      url: '/products/:food-containers',
    },
    {
      title: 'Bopp Tapes',
      url: '/products/:bopp-tapes',
    },
    {
      title: 'Paper Napkins',
      url: '/products/:paper-napkins',
    },
  ];
}
