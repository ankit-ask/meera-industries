import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { FooterCopyrightStripComponent } from './shared/ui/footer-copyright-strip/footer-copyright-strip.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { ItemCardComponent } from './shared/ui/item-card/item-card.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeroBannerComponent } from './shared/ui/hero-banner/hero-banner.component';
import { HeaderTopStripComponent } from './shared/ui/header-top-strip/header-top-strip.component';
import { OfferBannerComponent } from './shared/ui/offer-banner/offer-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    FooterCopyrightStripComponent,
    HeaderComponent,
    ItemCardComponent,
    ContactComponent,
    ProductListComponent,
    HeroBannerComponent,
    HeaderTopStripComponent,
    OfferBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
