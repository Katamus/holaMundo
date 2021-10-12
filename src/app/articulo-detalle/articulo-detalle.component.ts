import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }
  nombre:String = new String();
  precio:number = 0;
  ngOnInit(): void {
    console.log(this.ruta.snapshot.params.nombre);
    this.nombre = this.ruta.snapshot.params.nombre;
    this.precio = this.ruta.snapshot.params.precio;
  }

}
