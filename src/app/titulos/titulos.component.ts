import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre:string = 'Maria';
  apellido:string = 'Perez';

  alumno:any = {
      nombre: 'carlos',
      apellido:'pineda',
      edad:21
  };

  inputNuevo:string = 'soy un input';
  correo:string = 'asdasd';
  password:string = 'asdas';

  constructor() { }

  ngOnInit(): void {
  }

  ingresar () {
    console.log(this.correo);
    console.log(this.password);
  }

}
