import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any[]=[];
  showAlert = false;

  constructor(private router: Router, private itemService:ItemService,  ){

  }
  ngOnInit(): void {
   this.items = this.itemService.getItems();
   
  }

  Add(){
    this.router.navigate(['/create']);
  }
  
  Delete(id: string) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.showAlert = true;
    setTimeout(() => {
    this.showAlert = false;
  }, 3000);
  }
  
  

}
