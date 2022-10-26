import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[] = [
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
      title: 'T-Shirt 5',
      price: 120,
      nbrLike: 20,
      description: 'Cool T-shirt',
      category: 'women',
      picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
      quantity: 0
    },
    {
      id: 6,
      title: 'T-Shirt 6',
      price: 120,
      nbrLike: 20,
      description: 'Cool T-shirt',
      category: 'kids',
      picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f88c38f6-5eb3-4cd8-a509-08b59410875b/tee-shirt-sportswear-club-pour-bVD3j8.png',
      quantity: 0
    }
  ]

  constructor() { }

  public getProducts(): Product[]{
    return this.productList
  }

  public deleteProduct(product: Product): void{
    let i = this.productList.indexOf(product)
    if(i!=-1) this.productList.splice(i,1)
  }
}
