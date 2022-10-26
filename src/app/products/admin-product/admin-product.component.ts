import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  public productList: Product[]
  public outOfStock: Product[]
  constructor(private products: ProductService) { }

  ngOnInit(): void {
    this.fillProductList()
    this.updateStock()
    
  }

  deleteProduct(product: Product):void {
    this.products.deleteProduct(product)
    this.updateStock()
  }

  updateStock(): void{
    this.outOfStock = this.productList.filter(pr => pr.quantity == 0 )
  }

  fillProductList():void{
    this.productList = this.products.getProducts()
  }

}
