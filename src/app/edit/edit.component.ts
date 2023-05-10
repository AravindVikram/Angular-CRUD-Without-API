import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  items:any[]=[]
  item:any = {};

  constructor(
    private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    const data = localStorage.getItem('items'); 
    if (data) {
      this.items = JSON.parse(data); 
    }
    console.log(this.items);
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.items.find(item => item.id === id) || {};
  }
  
  onSubmit() {
    const index = this.items.findIndex(item => item.id === this.item.id);
      this.items[index] = this.item; 
      localStorage.setItem('items', JSON.stringify(this.items)); 
    this.router.navigate(['']); 
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
