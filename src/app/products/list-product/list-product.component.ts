import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private stats: StatsService) { 
  }

  ngOnInit(): void {
    this.title = "My App Store"
    this.all = [
      {
        id: 1,
        title: 'T-Shirt 1',
        price: 500,
        nbrLike: 40,
        description: 'Cool T-shirt',
        category: 'kids',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 35
      },
      {
        id: 2,
        title: 'T-Shirt 2',
        price: 200,
        nbrLike: 40,
        description: 'Cool T-shirt',
        category: 'men',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 2
      },
      {
        id: 3,
        title: 'T-Shirt 3',
        price: 50,
        nbrLike: 40,
        description: 'Cool T-shirt',
        category: 'men',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 35
      },
      {
        id: 4,
        title: 'T-Shirt 4',
        price: 120,
        nbrLike: 20,
        description: 'Cool T-shirt',
        category: 'women',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 15
      },
      {
        id: 5,
        title: 'T-Shirt 4',
        price: 120,
        nbrLike: 20,
        description: 'Cool T-shirt',
        category: 'women',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 0
      },
      {
        id: 6,
        title: 'T-Shirt 4',
        price: 120,
        nbrLike: 20,
        description: 'Cool T-shirt',
        category: 'women',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 0
      }
    ]

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
