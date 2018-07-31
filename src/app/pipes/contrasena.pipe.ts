import { Pipe, PipeTransform } from '@angular/core';
/** TODO: debemos mostrar un boton en el html de los pipes de ejemplo y cambiar de true a false
 * una propiedad del componente para pasar la contrasena a asteriscos. Luego con evento click 
 * llamamos a una funcion del mismo componente que nos cambia el valor de un booleano del mismo.
 * Metemos la propiedad en una directiva para ver el cambio en tiempo real.
 */
@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  /** el value es la propiedad a formatear que nos llega. En este caso el nombre de una persona
   * nos devuelve el nombre pasado a asteriscos si el argumento es falso 
   */
  transform(value: string, activarPass: boolean): string {
    let array: Array<any> = [];
    let stringValue = '';
    // asignamos el string a un array de caracteres
    if (!activarPass) {

      stringValue = value;

    } else {

      for (let i = 0; i < value.length; i++) {
        array[i] = '*';
      }

      stringValue = array.join('');
      console.log(array.length);
    }

    return stringValue;
  };
}
