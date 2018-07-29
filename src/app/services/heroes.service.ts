import { Injectable } from '@angular/core';
/* import {IHeroes} from ''; */

@Injectable()
export class HeroesService implements IHeroes{

    public texto:string = 'Probamos si funciona el servicio'; 
    nombre:string;
    bio:string;
    img:string;          
    aparicion:string;
    casa:string;

    private heroes_array:IHeroes[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Iron-Man",
          bio: "'Tony' Stark es un multimillonario industrial e inventor. Él dirige Industrias Stark, originalmente iniciada por su padre, Howard Stark. Tony crea una armadura para convertirse en el invencible superhéroe Iron Man. Stark sigue siendo humano, con la excepción de su Reactor Ark en su pecho. Uno de los hombres más poderosos, ricos, e inteligentes del Universo Cinematográfico de Marvel. Sin embargo, su poder proviene de su armadura de alta tecnología, la Armadura de Iron Man, la cual le otorga una fuerza y durabilidad sobrehumanas, la habilidad de volar, y un diverso armamento.",
          img: "assets/img/iron-man2.jpg",
          aparicion: "1966-01-01",
          casa: "Marvel"
        }
      ];

    /**
     * @returns array de objetos de todos los heroes 
     */  
    public getHeroesService():IHeroes[]{
        return this.heroes_array;
    }
    /**
     * Finalmente debemos capturar el elemento de heroes_array[] a partir del id de la URL
     * 
     * @param indice del elemento que vamos a mostrar en la pagina HeroesIndividualComponent
     * las URLs siempre devuelven string
     */
    public getHeroeIndividual(indice:string){
      return this.heroes_array[indice];
    }
    /**
     * Funcion necesaria para realizar busquedas en el navegador
     * @param palabra es la que nos llega a traves del navegador
     */
    public buscarHeroe( palabra:string ):IHeroes[]{
      // a este array le iremos aniadiendo los values que vamos capturando del input de busqueda
      let arrayHeroes:IHeroes[] = [];
      // lo que recibamos lo debemos pasar a minusculas
      palabra = palabra.toLowerCase();

      // Otro modo de hacerlo
/*       for(let item of this.heroes_array){
        let nombre = item.nombre.toLowerCase();
        if (nombre.indexOf(palabra)) {
          arrayHeroes.push(item);
        }
      } */

      this.getHeroesService().forEach(element => {
        // pasamos a minusculas los nombres de los heroes asignandolos una variable local
        let nombre = element.nombre.toLowerCase();
        // devuelve 0 o la posicion superior si encuentra coincidencia en los strings, 
        // si no -1
        if (nombre.indexOf(palabra) >= 0) {
          // agregamos el objeto coincidente
          arrayHeroes.push(element);
        }
      });
      return arrayHeroes;
    }

}

/********************* INTERFACE ********************/
/** declaramos una interfaz con los campos obligatorios que usaremos en cada Heroe
 * El export es imprescindible para poder exportar la interfaz
 */
export interface IHeroes{

  /** si ponemos un interrogante tal que asi nombre:?string, esa propiedad no es obligatoria
   * para los componentes que implementen la interfaz
   */
    nombre:string;
    bio:string;
    img:string;          
    aparicion:string;
    casa:string;
};