import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {


    transform(value: string, todasPalabras:boolean = true): string {
        // si no declaro el let no funciona
        let array: Array<string> = [];
        let capital: string = '';

        // el value es el valor de la propiedad a la que le damos formato
        value = value.toLowerCase();
        // pasamos el string a array, cada elemento sera cada palabra obviando los espacios
        array = value.split(' ');
        console.log(array);
        if (todasPalabras) {
            array.forEach(element => {
                capital += element.substring(0, 1).toUpperCase() + element.substring(1, element.length) + ' ';
            });
        }else{
            capital = array[0].substring(0, 1).toUpperCase() + array.join(" ").substring(1);
        }

        /*  for(let item in array){
            // en el substring poniendo el uno me toma el resto
               array[item] = array[item][0].toUpperCase() + array[item].substring(1);
            } */
        // booleano que devuelve true si se cumple, eliminamos el espacio final        
        if (capital.endsWith(' ')) {
            capital = capital.substring(0, capital.length - 1);
        }
        console.log(value);
        console.log(todasPalabras);
        //return array.join(' ');
        return capital;
    }
}