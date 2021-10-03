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

  ingresar (evento:any) {
    debugger;
    if(evento.key == "Enter" ){
      console.log("Ingresando al sistema");
    }
  }

  llamarAlert(){
    alert('Ha realizado doble click');
  }

  escribirModelo(){
    console.log(this.password);
  }

  escribirCorreo(){
    this.password = this.correo;
    console.log(this.correo);
    console.log(this.password);
  }

  escribir(evento:any){
    console.log(evento.target.value);
  }

  clorearFondoEvento(evento:any){
    evento.srcElement.style.background = "red";
    evento.srcElement.style.width = "200px";
  }

  cambiarTamano(evento:any){
    evento.srcElement.style.width = "284px";
    evento.srcElement.style.Heigth = "373px";
    evento.srcElement.style.border = "1px solid red"
  }

  incrementarTamano(evento:any){
    evento.srcElement.style.width = "184px";
    evento.srcElement.style.Heigth = "273px";
    evento.srcElement.style.border = "1px solid grend"
  }

}
