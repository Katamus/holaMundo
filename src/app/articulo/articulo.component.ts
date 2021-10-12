import { Component, OnInit } from '@angular/core';

interface articulo{
  nombre:string,
  descripcion:string,
  precio:number
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulos: Array<articulo> = new Array<articulo>();
  constructor() { }

  ngOnInit(): void {

    this.articulos.push({
      nombre:'Televisor de 24 pulgadas',
      descripcion: 'Marca dell con 4 años de garantia',
      precio:1500
    },{
      nombre:'Laptop I5',
      descripcion: 'Laptop nueva con 8gb de ram',
      precio:1500
    },{
      nombre:'Monitor',
      descripcion: 'Monitor curvo con pantalla fullHD',
      precio:800
    }
    
    
    
    );

  }

}
