import { Component, OnInit } from '@angular/core';

class Alumno{

  nombre:string = "";

  apellido:string = "";

  constructor(){
    this.nombre = this.nombre;
    this.apellido = this.apellido;
  }

}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  alumno: Alumno = new Alumno();
  listaAlumno:Array<Alumno> = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregarAlumno(){
    this.listaAlumno.push({
      apellido: this.alumno.apellido,
      nombre:this.alumno.nombre
    });
    this.alumno.apellido = "";
    this.alumno.nombre = "";
  }
  

}
