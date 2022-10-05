import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public title: String
  public list: Product[]
  public priceMax: number = 100;
  constructor() { 
  }

  ngOnInit(): void {
    this.title = "My App Store"
    this.list = [
      {
        id: 1,
        title: 'T-Shirt',
        price: 500,
        nbrLike: 40,
        description: 'Cool T-shirt',
        category: 'Apparel',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 35
      },
      {
        id: 2,
        title: 'T-Shirt 2',
        price: 200,
        nbrLike: 40,
        description: 'Cool T-shirt',
        category: 'Apparel',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 2
      },
      {
        id: 3,
        title: 'T-Shirt 3',
        price: 50,
        nbrLike: 40,
        description: 'Cool T-shirt',
        category: 'Apparel',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
        quantity: 35
      }
    ]
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
