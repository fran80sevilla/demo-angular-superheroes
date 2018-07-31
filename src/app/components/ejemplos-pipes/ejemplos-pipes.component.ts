import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html'
})
export class EjemplosPipesComponent implements OnInit {

  public nombre:string;
  public array:Array<number>;
  public PI:number = Math.PI;
  public numero_decimal:number;
  public salario:number;
  public numero:number;
  public fecha = new Date();
  public stringFecha = '2018-07-31';
  public mi_nombre:string = 'Rogelio María salaZaR vázQuez';
  // tarea activar desactivar boton password
  public activarBoton:boolean;

  constructor() { 
    this.nombre = 'Fernando Pérez';
    this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.numero_decimal = 0.4588;
    this.salario = 1234.5;
    this.numero = 123.1;
    // inicializamos a false para que se vea el nombre
    this.activarBoton = false;
  }

  public fnActivarBoton(){
    if (this.activarBoton) {
      this.activarBoton = false;
    }else{
      this.activarBoton = true;
    }
  }
  /** Creamos objeto para visionar un JSON del mismo dentro de una etiqueta pre de bootstrap 4 */
  mi_objeto = {
    nombre: "Pedro",
    apellido: "Márquez",
    direccion: {
      calle: "Real",
      numero: "47",
      localidad: "Sevilla"
    }
  };// fin objeto

  // Promise para el Pipe Async. resolve nos da el dato
  valorPromesa = new Promise( ( resolve, reject ) => {    
    // creamos un proceso que demore un poco que llamara a resolve
    setTimeout( ()=> resolve('Llegó el dato'), 3500);
  })

  ngOnInit() {
  }

}
