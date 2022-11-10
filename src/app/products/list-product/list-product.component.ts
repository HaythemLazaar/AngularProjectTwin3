import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { StatsService } from 'src/app/core/services/stats.service';
import { Product } from '../../core/model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public title: String
  public list: Product[]
  public all: Product[]
  public priceMax: number;
  public count: number

  constructor(private route: ActivatedRoute, private stats: StatsService, private products: ProductService) { 
  }

  ngOnInit(): void {
    this.title = "My App Store"

    // Retrieve data
    this.products.getProducts().subscribe( 
      (data: Product[]) => {
        this.all = data
    })

    // Out of stock Count
    this.count = this.stats.getCount(this.all,'quantity',0)

    // Detect change in category
    this.route.params.subscribe(
      (params) => {
        if(params['category'] != null){
          this.list = this.all.filter(pr => pr.category == params['category'] )
          console.log(params['category'])
        }
        else{
          this.list = this.all
        }
        console.log(this.list)
      }
    )
    
  }
  incrementLike(product: Product): void{
    let i = this.list.indexOf(product)
    if(i != -1){
      this.list[i].nbrLike++
    }
  }
  buyProduct(product: Product): void{
    let i = this.list.indexOf(product)
    if(i != -1) this.list[i].quantity--
  }

}
