export class Paginator {
  paginador: Array<Object> = new Array();
  indice: number;

  constructor(private items: Array<Object>, private container, private limite:number, private cargar:number) {
    this.indice = limite;
    for(let i=0; (i<limite) && (i<this.items.length); i++) {
      this.paginador.push(items[i]);
    }
    container.nativeElement.addEventListener("scroll", this.scroll.bind(this));
  }

  paginarDelante () {
      for(let i = 0; i<this.cargar; i++) {
        if(this.indice < this.items.length) {
          this.paginador.shift();
          this.paginador.push(this.items[this.indice]);
          this.indice++;
        }
      }
  }

 paginarDetras () {
   let posicion = this.cargar;
   let avanza = this.indice - this.limite - this.cargar;
   for(let i=0; i<this.cargar; i++) {
     if((this.indice - this.limite) > 0) {
       this.paginador[posicion] = this.paginador[i];
       this.paginador[i] = this.items[avanza];
      //  console.log(this.indice-this.limite);
       posicion++;
       avanza++;
       this.indice--;
       this.container.nativeElement.scrollTop = 1;
     }
   }
 }

 scroll (){
   let height = this.container.nativeElement.scrollHeight - (this.container.nativeElement.clientHeight + 20);

   let porcentaje = (this.container.nativeElement.scrollTop * 100) / height;

   if(porcentaje >= 100) {
     this.paginarDelante();

   }
   else if (porcentaje === 0) { this.paginarDetras();}
 }

}
