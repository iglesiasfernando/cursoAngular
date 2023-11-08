import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/app.router';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit{

    itemList : Item[]
    public nuevoItemLink : string = "/" + AppRoutes.NUEVO_ITEM
    constructor(){
      this.itemList = [
        { 
          titulo : "Tarea n° 1",
          descripcion:"Esta es mi primera tarea",
          estado : 0 , 
          fecha : new Date(),
          eliminado : false
        },{ 
          titulo : "Tarea eliminada",
          descripcion:"Mi tarea eliminado",
          estado : 0 , 
          fecha : new Date(),
          eliminado : true
        },{ 
          titulo : "Mi tercera tarea",
          descripcion:"Esta es mi tercera tarea importante",
          estado : 1 , 
          fecha : new Date(),
          eliminado : false
        }]

    }
    ngOnInit(): void {
    
    }
    itemAfterVieInit(item : Item){
      //alert(JSON.stringify(item))
    }
}
