import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busapartados'
})
export class BusapartadosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const apartados of value) {
      if (apartados.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(apartados);
      }else if(apartados.fechapartado.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(apartados);
      };
    };
    return resultPosts;
  }


}
