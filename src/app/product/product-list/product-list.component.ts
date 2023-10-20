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
    'We are the leading manufacturers and suppliers of Disposable Plastic Products which are recyclable and available in various shapes and sizes. We are also the pioneers among the major Disposable Food Containers Exporters. The products are known for their quality and affordability in Central India.',
    'We have wide variety of HBPE Bottles in differnet colors. Customized printed bottles also available.',
    'We have wide variety of HDPE Toys in differnet colors. Customization options are also available.',
    'We have wide variety of Bopp Tapes in differnet colors. Customized printed tapes also available.',
    'We have wide variety of Paper Napkins in differnet colors. Customized printed napkins also available.',
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
          {
            name: '500 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/500ml.png',
          },
          {
            name: '500 New - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/500ml.png',
          },
          {
            name: '300 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/300ml.png',
          },
          {
            name: '300 New - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/250ml.png',
          },
          {
            name: '300 S - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/300ml.png',
          },
          {
            name: '250 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/250ml.png',
          },
          {
            name: '100 ML - Round Container',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/100ml.png',
          },
        ],
      },
      {
        subCategory: 'Dishwasher Container',
        items: [
          {
            name: '300 ML Dishwasher',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/Dishwasher.png',
          },
          {
            name: '300 S Dishwasher',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/dishwasher-1.png',
          },
          {
            name: '500 ML Dishwasher',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/Dishwasher-500ml.png',
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
            media: 'assets/images/products/blow-bottle-1.png',
          },
          {
            name: '50 ML Glycerine Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/gems-bottle-1.png',
          },
          {
            name: '100 ML Glycerine Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/Hydrogen-peroxide-Bottle.png',
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
            media: 'assets/images/products/toys.png',
          },
          {
            name: 'Vampire Toys',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/toys.png',
          },
          {
            name: 'Teddy Gems Bottle',
            description: 'Customized colors avaialble',
            media: 'assets/images/products/toys.png',
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
            media: 'assets/images/products/Tape-2.png',
          },
          {
            name: 'Brown Tapes',
            description: '',
            media: 'assets/images/products/Tape-3.png',
          },
          {
            name: 'Printed Tapes',
            description: 'Customized options available',
            media: 'assets/images/products/Tape-4.png',
          },
          {
            name: 'Coloured Tapes',
            description: '',
            media: 'assets/images/products/Tape-6.png',
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
