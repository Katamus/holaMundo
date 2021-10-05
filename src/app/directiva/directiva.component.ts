import { Component, OnInit } from '@angular/core';

interface articulo{
  nombre:string;
  cantidad:number;
  fecha:Date;
  empresa:string;
  importante:boolean,
  textoGrande:boolean
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
  aplicarCuadro:boolean = true;

  articulos:Array<articulo> = [{
   nombre:"arroz",
   cantidad:100,
   fecha:new Date("10/15/2021"),
   empresa:"Roa",
   importante:true,
   textoGrande:false
  },{
    nombre:"Maiz",
    cantidad:50,
    fecha:new Date("10/16/2021"),
    empresa:"Blanquita",
    importante:false,
    textoGrande:true
  },{
    nombre:"lentejas",
    cantidad:25,
    fecha:new Date("10/20/2021"),
    empresa:"La tortuga",
    importante:false,
    textoGrande:false
  },{
    nombre:"Blanquiños",
    cantidad:1000,
    fecha:new Date("01/24/2022"),
    empresa:"El gringo",
    importante:true,
    textoGrande:true
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

  alternarCuadro(){
    this.aplicarCuadro= !this.aplicarCuadro;
  }

}
