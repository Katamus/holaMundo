import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulos: Array<articulo> = new Array<articulo>();
  constructor(private ruta:Router) { }

  ngOnInit(): void {

    this.articulos.push({
      nombre:'Televisor de 24 pulgadas',
      descripcion: 'Marca dell con 4 años de garantia',
      precio:1500,
      precioMayorias:1400,
      stock:10
    },{
      nombre:'Laptop I5',
      descripcion: 'Laptop nueva con 8gb de ram',
      precio:1500,
      precioMayorias:1400,
      stock:9
    },{
      nombre:'Monitor',
      descripcion: 'Monitor curvo con pantalla fullHD',
      precio:800,
      precioMayorias:750,
      stock:4
    }
    );
  }

  pasarParametro(articuloRecido:articulo){
    this.ruta.navigate(['articuloDetalle',{articulo:JSON.stringify(articuloRecido)}])
  }

}
