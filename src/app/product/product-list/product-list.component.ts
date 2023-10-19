import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { SwiperOptions } from "swiper";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  // swiperOptions: SwiperOptions = {
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   loop: true,
  //   pagination: true,
  // };

  category: any;
  categoryTitle = [
    'Round Containers',
    'HDPE Bottles',
    'HDPE Toys',
    'BOPP Tapes',
    'Paper Napkins',
  ];
  categorySubtitle = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetu',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetu',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetu',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetu',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetu',
  ];

  products = [
    //BEGINS: Round Containers
    [
      {
        subCategory: 'Food Container',
        items: [
          {
            name: '1200 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '1000 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '750 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '600 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '500 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '500 New - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '300 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '300 New - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '300 S - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '250 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '100 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
        ],
      },
      {
        subCategory: 'Dishwasher Container',
        items: [
          {
            name: '300 ML Dishwasher',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '300 S Dishwasher',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '500 ML Dishwasher',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
        ],
      },
    ],
    //ENDS: Round Containers

    //BEGINS: HDPE Bottles
    [
      {
        subCategory: 'Default',
        items: [
          {
            name: '100 ML Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '50 ML Glycerine Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '100 ML Glycerine Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
        ],
      },
    ],
    //ENDS: HDPE Bottles

    //BEGINS: HDPE Toys
    [
      {
        subCategory: 'Default',
        items: [
          {
            name: 'Panda Toys',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Vampire Toys',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Teddy Gems Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/dummy-product-05.png',
          },
        ],
      },
    ],
    //ENDS: HDPE Toys

    //BEGINS: BOPP Tapes
    [
      {
        subCategory: 'Default',
        items: [
          {
            name: 'Transparent Tapes',
            description: '',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Brown Tapes',
            description: '',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Printed Tapes',
            description: 'Customized options available',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Coloured Tapes',
            description: '',
            media: 'assets/images/dummy-product-05.png',
          },
        ],
      },
    ],
    //ENDS: BOPP Tapes

    //BEGINS: Paper Napkins
    [
      {
        subCategory: 'Default',
        items: [
          {
            name: 'Hard Paper Napkin',
            description: 'Available in different sizes',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Soft paper Napkin',
            description: 'Available in different sizes',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: '2 Ply Paper Napkin',
            description: 'Available in different sizes',
            media: 'assets/images/dummy-product-05.png',
          },
          {
            name: 'Value Pack',
            description: 'Get the best offers',
            media: 'assets/images/dummy-product-05.png',
          },
        ],
      },
    ],
    //ENDS: Paper Napkins
  ];

  categoryIndex!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.category = this.activatedRoute.snapshot.params['category'];
    // console.log('Category =>', this.category);

    // this.prepareData(this.category);

    this.activatedRoute.params.subscribe((params) => {
      this.category = params['category'];
      console.log('Category =>', this.category);
      this.prepareData(this.category);
    });
  }

  prepareData(category: any) {
    switch (category) {
      case 'round-containers': {
        this.categoryIndex = 0;
        break;
      }
      case 'hdpe-bottles': {
        this.categoryIndex = 1;
        break;
      }
      case 'hdpe-toys': {
        this.categoryIndex = 2;
        break;
      }
      case 'bopp-tapes': {
        this.categoryIndex = 3;
        break;
      }
      case 'paper-napkins': {
        this.categoryIndex = 4;
        break;
      }
      default: {
        break;
      }
    }

    console.log(this.products[this.categoryIndex]);
  }
}
