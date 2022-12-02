import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registro } from '../models/registro';
import { environment } from '../../environments/environment.prod';



const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

    registro(datos: registro){
      return this.http.post(`${URL}users`, datos);
    }
}
