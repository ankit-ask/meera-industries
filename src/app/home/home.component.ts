import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories = [
    {
      title: 'Containers',
      media: 'assets/images/categories/container.png',
      reditectURL: '/products/round-containers',
    },
    {
      title: 'HDPE Bottles',
      media: 'assets/images/categories/container.png',
      reditectURL: '/products/hdpe-bottles',
    },
    {
      title: 'HDPE Toys',
      media: 'assets/images/categories/container.png',
      reditectURL: '/products/hdpe-toys',
    },
    {
      title: 'BOPP Tapes',
      media: 'assets/images/categories/container.png',
      reditectURL: '/products/bopp-tapes',
    },
    {
      title: 'Paper Napkins',
      media: 'assets/images/categories/container.png',
      reditectURL: '/products/paper-napkins',
    },
  ];

  bestSellerProducts = [
    {
      name: '1200 ML - Round Container',
      description: 'Customized colors avaialble',
      media: 'assets/images/products/1200ml.png',
    },
    {
      name: '1000 ML - Round Container',
      description: 'Customized colors avaialble',
      media: 'assets/images/products/1000ml.png',
    },
    {
      name: '750 ML - Round Container',
      description: 'Customized colors avaialble',
      media: 'assets/images/products/600ml.png',
    },
    {
      name: '600 ML - Round Container',
      description: 'Customized colors avaialble',
      media: 'assets/images/products/600ml.png',
    },
  ];

  newProducts = [
    {
      name: 'Hard Paper Napkin',
      description: 'Available in different sizes',
      media: 'assets/images/products/soft-tissue-paper-napkin.png',
    },
    {
      name: 'Soft paper Napkin',
      description: 'Available in different sizes',
      media: 'assets/images/products/soft-tissue-paper-napkin.png',
    },
    {
      name: '2 Ply Paper Napkin',
      description: 'Available in different sizes',
      media: 'assets/images/products/soft-tissue-paper-napkin.png',
    },
    {
      name: 'Value Pack',
      description: 'Get the best offers',
      media: 'assets/images/products/soft-tissue-paper-napkin.png',
    },
  ];
}
