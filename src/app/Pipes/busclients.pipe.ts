import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busclients'
})
export class BusclientsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const client of value) {
      if (client.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(client);
      }else if(client.apellidos.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(client);
      }else if(client.correo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(client);
      };
    };
    return resultPosts;
  }
}
