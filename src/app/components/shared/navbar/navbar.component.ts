import { Component, OnInit } from '@angular/core';
// Servicios
import { HeroesService, IHeroes } from '../../../services/heroes.service';
// servicio para asignar los parametros a la url para que nos redireccione
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public heroeArray:IHeroes[] = [];
  /**
   * CONSTRUCTOR
   * @param _heroesService objeto de nuestro servicio de datos de heroes
   */
  constructor( private _heroesService: HeroesService,
              private _router:Router ) {

  }

  /**
   * Para ello importamos el servicio contenedor del metodo de busqueda de heroes
   * @param palabra que capturamos en evento (click) o (keyup.enter)
   */
  public buscarHeroe(palabra: string) {
    palabra = palabra.toLowerCase();
    // funciona
    console.log(palabra);
    // aqui agregamos a la URL la palabra final y nos redirecciona a esa ruta     
    this._router.navigate(['app-navbar', 'pantalla-busqueda', palabra]);    
 }

  ngOnInit() {

  }

}
