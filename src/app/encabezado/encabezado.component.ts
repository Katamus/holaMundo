import { Component, OnInit } from '@angular/core';

interface itenMenu{
  ruta:string,
  nombre:string,
  estado:boolean,
  activo:boolean,
  id:number
}

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})

export class EncabezadoComponent implements OnInit {

  menu:Array<itenMenu>=[{
    activo: true,
    estado:true,
    nombre:"Inicio",
    id:1,
    ruta:"/"
  },{
    activo: false,
    estado:true,
    nombre:"Pipes",
    id:3,
    ruta:"/pipes"
  },{
    activo: false,
    estado:true,
    nombre:"Ejemplo",
    id:2,
    ruta:"/ejemplo"
  },{
    activo: false,
    estado:true,
    nombre:"Directiva",
    id:4,
    ruta:"/directiva"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  activar(id:number){
    this.menu.forEach(item => {
      if(item.id == id){
        item.activo = true;
      }else{
        item.activo = false;
      }
    });
  }

}
