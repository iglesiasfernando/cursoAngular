import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit{

    constructor(){
      alert("alert constructor")
    }
    ngOnInit(): void {
       alert("se ejecuta onInit")
    }
}
