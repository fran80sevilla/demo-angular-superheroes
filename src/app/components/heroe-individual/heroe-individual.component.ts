import { Component, OnInit } from '@angular/core';
// SERVICIOS
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-individual',
  templateUrl: './heroe-individual.component.html'
})
export class HeroeIndividualComponent implements OnInit {

  // asignamos variable local al metodo del servicio que recoge el elemento del array
  public heroe: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
    /**este metodo es un Observer, los cuales estan pendientes de los cambios que se 
     * van dando en la aplicacion. Son promesas, es decir, cambios que ser van a 
     * producir en la aplicacion, pero aun no han sucedido.
     * Para que surta efecto, necesitamos SUSCRIBIRNOS a ese Observador.
     */
    this._activatedRoute.params.subscribe(parametros => {
      // parametros nos devuelve el fragmento de URL que le dimos en app.routes
      console.log(parametros['id']);
      this.heroe = this._heroesService.getHeroeIndividual(parametros['id']);
      // sale bien
      console.log(this.heroe);
    }
    )
  }

  ngOnInit() {
  }

}
