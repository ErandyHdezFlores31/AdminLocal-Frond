import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locales } from '../models/locales';
import { environment } from '../../environments/environment.prod';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private http: HttpClient) { }

  listLocales() { //Listar
    return this.http.get(`${URL}locales`);
  }

  agreLocales(datos: locales){ //Agregar
    return this.http.post(`${URL}locales`, datos);
  }

  editLocales(datos: locales){ //Actualizar
    return this.http.put(`${URL}locales/${datos.id}`, datos);
  }

  localesEditId(id:any) { //Editar
    return this.http.get(`${URL}locales/${id}`);
  }

  deleteLocales(id: any){ //Eliminar
    return this.http.delete(`${URL}locales/${id}`);

  }
}
