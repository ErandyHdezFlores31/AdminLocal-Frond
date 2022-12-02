import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientes } from '../models/clientes';
import { environment } from '../../environments/environment.prod';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  
  listClientes() { //Listar
    return this.http.get(`${URL}clientes`);
  }

  agreClientes(datos: clientes){ //Agregar
    return this.http.post(`${URL}clientes`, datos);
  }

  editClientes(datos: clientes){ //Editar
    return this.http.put(`${URL}clientes/${datos.id}`, datos);
  }

  ediId(id: any){ //Listar por id
    return this.http.get(`${URL}clientes/${id}`)
  }

  deleteClientes(id: any){ //Eliminar
    return this.http.delete(`${URL}clientes/${id}`);

  }
}
