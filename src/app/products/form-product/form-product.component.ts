import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  public product: Product
  public title: String
  public action: String
  constructor(private productService: ProductService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = new Product()
    this.action = this.activatedRoute.snapshot.params['action']
    if(this.action.includes("update")){
      this.title = "Update a Product"
      if(this.action.length > 6){
        let updateProductId: number = parseInt(this.action.slice(7),10)
        this.product = this.productService.getProductById(updateProductId)
      }
    }else this.title = "Add a new Product"
  }

  addProduct(){
    if(this.action.includes("update")) {
      this.productService.updateProduct(this.product).subscribe(
        () => this.route.navigate(["product/list"]),
        () => console.log('error'),
        () => console.log("product updated")
      )
      
    }
    else {
      this.productService.addProduct(this.product).subscribe(
        () => this.route.navigate(["product/list"]), 
        () => console.log('error'),
        () => console.log("product added")
      )
    } 
    
  }

}
