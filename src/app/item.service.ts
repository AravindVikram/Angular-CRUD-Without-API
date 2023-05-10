import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: any[] = [];

  constructor() { }

  getItems() {
    return JSON.parse(localStorage.getItem('items') || '[]');
  }

 

  
}
