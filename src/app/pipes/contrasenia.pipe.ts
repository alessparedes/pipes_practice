import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activo: boolean = true): string {
    return (activo) ? '*'.repeat(value.length) : value;
  }

}
