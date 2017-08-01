import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Categoria } from '../../models/cats';
import { RepositorioService } from '../../services/repositorio.service';
import { Chatstory } from '../../models/chatstory.model';
import { Paginator } from '../../models/paginador';
import { CardMiBibliotecaBuscadorComponent } from '../card-mi-biblioteca-buscador/card-mi-biblioteca-buscador.component';

@Component({
  selector: 'app-card-chatstory',
  templateUrl: './card-chatstory.component.html',
  styleUrls: ['./card-chatstory.component.scss']
})
export class CardChatstoryComponent implements OnInit {
  chatSt: Chatstory;
  firstAdded: number = 0;
  @Input() chatStoriesFiltrados: Array<Chatstory>;
  @Input() categoria: Categoria;
  filtradosVacio: boolean = true;
  //chatstories: Array<Chatstory>;
  paginador = null;
  @ViewChild('contenedorBiblioteca') contenedorBiblioteca: ElementRef;

  constructor(private repositorio: RepositorioService) { }

  ngOnInit(){

  }

  getColor(chatstory: Chatstory) {
    return chatstory.categoria.color;

  }

  getNumber(numero: number) {
    if(numero>=1000) return '+' + Math.round(numero/1000) + 'K';
    return numero;

  }

  addBiblioteca(chatstory: Chatstory) {
    if(!chatstory.added) {
      //this.repositorio.chatstories.push(chatstory);
      if(this.firstAdded === 0) {
        CardMiBibliotecaBuscadorComponent.showMessage();
        this.repositorio.paginadorChatstoriesBiblioteca.paginador = [];
      }

      this.firstAdded++;

      if(this.firstAdded === 5) {
        CardMiBibliotecaBuscadorComponent.turnFalse();
      }

      chatstory.added = true;
      this.repositorio.paginadorChatstoriesBiblioteca.addItem(chatstory);
      //console.log(this.repositorio.paginadorChatstoriesBiblioteca);
    }


  }

  // checkCategory(chatstory) {
  //   this.paginador = new Paginator(this.chatStoriesFiltrados, this.contenedorBiblioteca, 20,10);
  //   return true;
  // }

  checkDescription(chatstory: Chatstory){
    if(chatstory.descripcion === undefined  || chatstory.descripcion.length ===0) {
      chatstory.descripcion = "Este chatstory no tiene ninguna descripción."

    }
    return chatstory.descripcion;

  }

  emptyFiltrados(chats: any) {
    return chats.length === 0;
  }

  getBackgroundImage() {
    return 'linear-gradient(to bottom,'+this.categoria.opacidad+','+this.categoria.color+')';
  }
}
