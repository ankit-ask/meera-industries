import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() product: any;
  // product = {
  //   name: 'Test Product',
  //   description: 'This is a test product',
  //   media: ['assets/images/no-product-image.png'],
  //   price: 120.0,
  // };

  goToProductDetails() {}
}
