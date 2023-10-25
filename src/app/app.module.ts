import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabComponent } from './components/tab/tab.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './module/material/material.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { DonationButtonComponent } from './components/donation-button/donation-button.component';
import { AboutCardComponent } from './components/about-card/about-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TabComponent,
    CardComponent,
    CardListComponent,
    ImageCarouselComponent,
    DonationButtonComponent,
    AboutCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
