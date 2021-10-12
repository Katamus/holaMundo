import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo!: articulo;
  constructor(private ruta: ActivatedRoute) { }
  nombre:String = new String();
  precio:number = 0;
  ngOnInit(): void {
    this.articulo =  JSON.parse(this.ruta.snapshot.params.articulo);
  }

}
