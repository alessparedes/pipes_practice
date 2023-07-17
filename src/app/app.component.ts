import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string = 'Christian';
  PI        : number = Math.PI;
  personajes: string[] = ['Ironman', 'Thor', 'Loki', 'Groot', 'Fury'];
  arreglo   : number[] = [1,2,3,4,5,6,7,8,9,10,11,19];
  porcentaje: number = 0.234;
  salario   : number = 1234.5;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(()=>{
      resolve('Llego la data')
    },2000);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: '17 B',
      casa: '19-18'
    }
  };
  
}
