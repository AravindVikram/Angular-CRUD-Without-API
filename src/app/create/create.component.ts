import { Component} from '@angular/core';

import { Router } from '@angular/router';

  
  @Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
  })
  export class CreateComponent  {

    name='';
    id='';
    description='';
    price='';
    stock='';

    items: any[] = [];
    showAlert = false;
 
    
  constructor(private router: Router) { }
  
    onSubmit() {
      if (!this.id || !this.name || !this.description || !this.price || !this.stock) {
        this.showAlert = true
        return;
      }

      const newItem = {id:this.id,  name:this.name, description:this.description,  price:this.price, stock:this.stock};

      let items = JSON.parse(localStorage.getItem('items') || '[]');
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));
      this.router.navigate(['']);
    }
  }
  