import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  /**
   * Para tomar primer letra colocarla mayuscula y lo que siga en minuscula y palabra por palabra debido al split
   * @param value Debe ser string, el cual se transformara.
   * @param todas Variabel booleana, para saber si se necesita las primera letras mayusculas de cada palabra o si solo la primera palabra
   * @returns 
   */
  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombre = value.split(' ');
    if (todas) {
      nombre = nombre.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
      //console.log(nombre);
    } else {
      nombre[0] = nombre[0][0].toUpperCase() + nombre[0].substring(1);
    }
    return nombre.join(' ');
  }
  
}
