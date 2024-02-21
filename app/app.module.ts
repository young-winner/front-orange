import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './Product';
import { footerComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    footerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
