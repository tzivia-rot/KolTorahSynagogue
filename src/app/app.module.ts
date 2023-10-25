import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatrialModule } from './module/matrial/matrial.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatrialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
