import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apartados } from '../models/apartados';
import { environment } from '../../environments/environment.prod';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class ApartadosService {

  constructor(private http: HttpClient) { }

  listApartados() { //Listar
    return this.http.get(`${URL}apartados`);
  }

  agreApartados(datos: apartados){ //Agregar
    return this.http.post(`${URL}apartados`, datos);
  }

  editApartados(datos: apartados){ //actualizar
    return this.http.put(`${URL}apartados/${datos.id}`, datos);
  }

  ediApartadosId(id: any){ //Listar por id
    return this.http.get(`${URL}apartados/${id}`)
  }

  deleteApartados(id: any){ //Eliminar
    return this.http.delete(`${URL}apartados/${id}`);
  }

  apartadosVen(fechavencimiento: any){ //Listar por la fecha de vencimiento
    return this.http.get(`${URL}apartados/${fechavencimiento}`)
  }
}
