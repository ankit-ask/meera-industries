import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  openWhatsapp() {
    window.open(
      'https://api.whatsapp.com/send/?phone=%2B919977403008&text=Hi%21%21+I+would+like+to+know+more+about+your+products!&type=phone_number&app_absent=0',
      '_blank'
    );
  }
}
