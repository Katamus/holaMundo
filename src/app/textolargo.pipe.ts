import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textolargo'
})
export class TextolargoPipe implements PipeTransform {
  resultado:string = ""; 
  transform(texto:string): string {
    if( texto.toString().length > 370 ){
      this.resultado = texto.substring(0,350);
      this.resultado += " continuara...";
    }else{
      this.resultado = texto;
    }
    return this.resultado;
  }

}
