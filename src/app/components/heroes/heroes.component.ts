import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroes } from '../../services/heroes.service';
import { RelojService } from '../../services/reloj.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  /**
   * Declaramos el servicio en el param del constructor
   */
  public texto_heroes: string;
  public today: number = Date.now();

  constructor(
    private _heroesService: HeroesService,
    private _relojService: RelojService,
    private _router: Router) {

    this.texto_heroes = this._heroesService.texto;
  }

  public getServicio(): string {
    let texto = this._heroesService.texto;
    return texto;
  }
  // llamamos al servicio que nos da la hora actual
  /*   public obtenerHoraService(){
      let hora:number = this._relojService.accesoHoraService();
      return hora;
    } */

  ngOnInit() {
    console.log(`Imprimimos la propiedad del servicio: ${this._heroesService.texto}.`);
    console.log(this._heroesService.getHeroesService());
  }

  public obtenerHeroes() {
    let heroes: IHeroes[] = this._heroesService.getHeroesService();
    return heroes;
  }

  /**
 * 
 * @param indice del elemento a capturar en la URL
 */
  public capturarId(indice: number) {
    // se pone la barra para que no se tome como un subdirectorio de heroes.component.html
    // el indice es el parametro que enviamos a traves de la URL
    this._router.navigate(['/heroe-individual', indice]);
    // vemos el index que vamos tocando en el DOM
    console.log(indice);
  }

  public array = [
    {
      nombre: 'percha', camisa: 'raida'
    },
    {
      nombre: 'calamidad', camisa: 'raida2'
    }];

}
