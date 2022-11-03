import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, 
    children:[
      { path: 'list', component: ListProductComponent },
      { path: 'manage-products/:action', component: FormProductComponent},
      { path: 'category/:category', component: ListProductComponent},
      { path: 'outofstock', component:AdminProductComponent },
      { path: 'outofstock/:action', component:FormProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
