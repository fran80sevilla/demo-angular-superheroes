import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
 
  @Input() heroes:any = {};
 /*  @Input() obtenerHeroes(){
    return this.heroes;
  };   */

  constructor() { }

  ngOnInit() {
  }

}