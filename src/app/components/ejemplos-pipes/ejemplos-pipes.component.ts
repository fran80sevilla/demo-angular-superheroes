import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html'
})
export class EjemplosPipesComponent implements OnInit {

  public nombre:string;
  public array:Array<number>;
  public PI:number = Math.PI;

  constructor() { 
    this.nombre = 'Fernando Pérez';
    this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit() {
  }

}
