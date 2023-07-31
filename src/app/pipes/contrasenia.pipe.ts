import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activo: boolean): string {
    let cadena = '';
    if (activo) {
      for (var i = 0; i<value.length; i++) {
        cadena += '*';
      }
      return cadena;
    }
    return value;
  }

}
