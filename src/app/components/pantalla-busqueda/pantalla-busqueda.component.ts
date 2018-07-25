import { Component, OnInit } from '@angular/core';
/* importamos el modulo que nos permite capturar el valor del parametro de la URL */
// Servicios
import { ActivatedRoute } from '@angular/router';
import { HeroesService, IHeroes } from '../../services/heroes.service';


@Component({
  selector: 'app-pantalla-busqueda',
  templateUrl: './pantalla-busqueda.component.html'
})
export class PantallaBusquedaComponent implements OnInit {

  /* Este array nos vale para listar los elementos que nos llegan */
  public arrayHeroe: IHeroes[] = [];
  // declaramos palabra para mostrarla cuando busquemos
  public palabra: string;

  /**
   * 
   * @param _activatedRoute servicio que captura el parametro que nos ha llegado a traves de 
   * la URL
   */
  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

    this._activatedRoute.params.subscribe(parametros => {
      // parametros nos devuelve el fragmento de URL que le dimos en app.routes
      console.log(parametros['palabra']);
      // asignamos para mostrar en pantalla el resultado de la Busqueda
      this.palabra = parametros['palabra'];
      this.arrayHeroe = this._heroesService.buscarHeroe(parametros['palabra']);
      // sale bien
      console.log(this.arrayHeroe);
    })
  }

  ngOnInit() {
  }

}
