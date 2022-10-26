import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }
  
  getCount(list: any[], criteria: String, value: any): number {
    let count = 0
    for(let i in list){
      if(list[i].criteria === value){
        count ++
      }
    }
    return count
  }
}
