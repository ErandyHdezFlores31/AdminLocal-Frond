import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const local of value) {
      if (local.nombrelocal.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(local);
      }else if(local.descripcion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(local);
      };
    };
    return resultPosts;
  }

}

