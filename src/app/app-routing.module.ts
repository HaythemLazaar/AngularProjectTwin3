import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ContactComponent } from './contact/contact.component';

const ROUTES: Routes=[
  {path:"product", component: ListProductComponent},
  {path:"user", component: ListUserComponent},
  {path:"home", component: HomeComponent},
  {path:"contact", component: ContactComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
