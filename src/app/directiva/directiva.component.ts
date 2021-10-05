import { Component, OnInit } from '@angular/core';

interface articulo{
  nombre:string;
  cantidad:number;
  fecha:Date;
  empresa:string;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando:boolean = true;
  nombres:string[] = ["Lucas","Roberto","Patoja","Eduardo"];
  menu:string = "";

  articulos:Array<articulo> = [{
   nombre:"arroz",
   cantidad:100,
   fecha:new Date("10/15/2021"),
   empresa:"Roa"
  },{
    nombre:"Maiz",
    cantidad:50,
    fecha:new Date("10/16/2021"),
    empresa:"Blanquita"
  },{
    nombre:"lentejas",
    cantidad:25,
    fecha:new Date("10/20/2021"),
    empresa:"La tortuga"
  },{
    nombre:"Blanquiños",
    cantidad:1000,
    fecha:new Date("01/24/2022"),
    empresa:"El gringo"
  }]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 3500);
  }

  alternar(){
    this.cargando= !this.cargando;
  }

  definirMenu(opcion:string){
    this.menu = opcion;
  }

}
