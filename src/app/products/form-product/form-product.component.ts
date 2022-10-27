import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  public newProduct: Product
  constructor(private product: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.newProduct = new Product()
  }

  addProduct(){
    this.product.addProduct(this.newProduct)
    console.log("product added")
    this.route.navigate(["product/list"])
  }
}
