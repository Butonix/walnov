import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Categoria } from '../../../models/cats';
import { RepositorioService } from '../../../services/repositorio.service';
import { Relato } from '../../../models/relato';
import { Usuario } from '../../../models/usuario.model';
import { Paginator } from '../../../models/paginador';

@Component({
  selector: 'app-user-content-relatos',
  templateUrl: './user-content-relatos.component.html',
  styleUrls: ['./user-content-relatos.component.scss']
})
export class UserContentRelatosComponent implements OnInit {
  // vista:string = "guardado";
  @ViewChild('contenedorBiblioteca') contenedorBiblioteca: ElementRef;
  constructor(private repositorio: RepositorioService) { }

  ngOnInit() {
    for(let i=0; i<25; i++) {
      for(let j=0; j<10; j++) {
        let nuevoRL = new Relato();


         nuevoRL.categoria = this.repositorio.categoriasAL[j];
         nuevoRL.titulo = "Hola" + i;
         nuevoRL.imagen_url = "https://lorempixel.com/158/129";
         nuevoRL.coments = 200324;
         nuevoRL.resumen = "Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag.";
         nuevoRL.likes = 784;
         nuevoRL.views = 2000;
         nuevoRL.usuario = new Usuario();
         nuevoRL.usuario.nombre = "Amorentrelineas";
         nuevoRL.usuario.imagen = "https://lorempixel.com/22/22";
         this.repositorio.relatos.push(nuevoRL);
      }
    }

    this.repositorio.paginadorCardsRelatos = new Paginator(this.repositorio.relatos, this.contenedorBiblioteca, 12, 6);
    // console.log(this.repositorio.paginadorCardsRelatos);

  }

}
