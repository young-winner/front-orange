import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './Login';
import { ProductComponent } from './Product/product.component';

const appRoutes : Routes = [
    {path: 'home',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'product',component:ProductComponent},
    {path: '', redirectTo:" : home", pathMatch:'full'}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
