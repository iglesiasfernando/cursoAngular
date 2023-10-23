import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit{

    item : Item 

    constructor(){
      this.item = { titulo : "Mi primer item",descripcion:"Este es mi primer item",estado : 0 , fecha : new Date(),eliminado : false}

    }
    ngOnInit(): void {
    
    }
    itemAfterVieInit(item : Item){
      alert(JSON.stringify(item))
    }
}
