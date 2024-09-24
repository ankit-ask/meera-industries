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
  openWhatsapp(productName: string) {
    window.open(
      `https://api.whatsapp.com/send/?phone=%2B919977403008&text=Hi%21%21+I+would+like+to+know+more+about+your+products+${productName}!&type=phone_number&app_absent=0`,
      '_blank'
    );
  }
}
