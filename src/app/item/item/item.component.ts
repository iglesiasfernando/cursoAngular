import { Component } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  protected item : Item;

  constructor(){
    this.item = { titulo : "Mi primer item",descripcion:"Este es mi primer item",estado : 0 , fecha : new Date(),eliminado : false}
  
  }
}
