import { Component,Input, Output,AfterViewInit, EventEmitter} from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item : Item
  @Output() afterViewInit = new EventEmitter<Item>(); //aca podemos mandar el tipo de dato que nosotros querramos

  constructor(){
  }

  ngAfterViewInit(){
    this.afterViewInit.emit(this.item) 

  } 
  

}
