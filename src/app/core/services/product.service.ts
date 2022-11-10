import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public URI = environment.URI + 'products/'
  private productList: Product[] = [
    {
      id: 1,
      title: 'Jordan 11 Retro',
      price: 300,
      nbrLike: 22,
      description: 'No need to journey into the jungle for their next pair of kicks. Free your child\'s wild side with a lively animal print. Hear them roar! Get yourself a matching pair with the Women\'s Air Jordan 11 Retro.',
      category: 'kids',
      picture: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8014cc7-306a-41d8-9842-17b83de8f5e1/jordan-11-retro-little-kids-shoes-HlkH9p.png',
      quantity: 2
    },
    {
      id: 2,
      title: 'Nike Air Force 1',
      price: 400,
      nbrLike: 72,
      description: 'The radiance lives on in the Nike Air Force 1 \’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.',
      category: 'men',
      picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-big-kids-shoes-M7mcL9.png',
      quantity: 2
    },
    {
      id: 3,
      title: 'Jordan Retro 1',
      price: 550,
      nbrLike: 60,
      description: 'No need to journey into the jungle for their next pair of kicks. Free your child\'s wild side with a lively animal print. Hear them roar! Get yourself a matching pair with the Women\'s Air Jordan 11 Retro.',
      category: 'men',
      picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/7cee5620-26ec-4139-aa52-62a4bd2e1f15/image.jpg',
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

  constructor(
    private http: HttpClient
  ){}

  public getProducts(){
    return this.http.get<Product[]>(this.URI)
  }

  public getProductById(id: number): Product{
    return this.productList[this.productList.findIndex( p => p.id == id)]
  }

  public deleteProduct(product: Product): void{
    this.http.delete(this.URI+product.id)
  }

  public addProduct(product: Product){
    return this.http.post(this.URI, product)
  }

  public updateProduct(product: Product){
    return this.http.put(this.URI, product)
  }
}
