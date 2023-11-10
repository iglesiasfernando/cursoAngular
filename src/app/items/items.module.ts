import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemsComponent } from './listaItems/lista-items/lista-items.component';
import { ItemComponent } from './item/item/item.component';
import { NuevoItemComponent } from './nuevo-item/nuevo-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { ItemClassDirective } from '../directivas/directiva-background.directive';



@NgModule({
  declarations: [
    ListaItemsComponent,
    ItemComponent,
    NuevoItemComponent,
    ItemClassDirective],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ]
})
export class ItemsModule { }
