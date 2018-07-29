import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
 
  @Input() heroes:any = {};
  @Input() today:number;
  // necesitaremos recibir el indice para redireccionar correctamente
  @Input() indice:number;

  capturarId(idx){
    this.indice = idx;
    // tambien podria hacerse con @Output y EventEmitter
    this._router.navigate(['/heroe-individual', idx]);
  }

  // importamos el servicio para enviar el parametro a la url
  constructor(private _router:Router) { }

  ngOnInit() {
  }

}
