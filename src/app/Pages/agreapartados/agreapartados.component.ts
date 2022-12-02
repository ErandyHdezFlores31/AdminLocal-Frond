import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { apartados } from 'src/app/models/apartados';
import { ApartadosService } from 'src/app/services/apartados.service';
import { LocalesService } from 'src/app/services/locales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agreapartados',
  templateUrl: './agreapartados.component.html',
  styleUrls: ['./agreapartados.component.css']
})
export class AgreapartadosComponent implements OnInit {
  apart: apartados = new apartados();
  cargando: boolean = false;
  apartado: any;
  listLoc: any;

  constructor(private router: Router, private ApartadosService: ApartadosService,
    private LocalesService: LocalesService) { }

  ngOnInit(): void {
    this.listApart();
    this.listLocal();

  }

  listApart() {
    this.cargando = true;
    this.ApartadosService.listApartados().subscribe((resp) => {
      this.cargando = false;
      this.apartado = resp;
      console.log(this.apartado);
    });
  }


  listLocal() {
    this.LocalesService.listLocales().subscribe((resp) => {
      this.listLoc = resp;
      console.log(this.listLoc);
    });
  }

  agregarApart(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Falta un campo por agregar, favor de verificar',
        timer: 1500,
      });
      console.log('Formulario no valido');
      return;
    }
    this.ApartadosService.agreApartados(this.apart).subscribe(
     {
      next:  res => {
        console.log(res);

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Agregado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listApart();
        this.limpiarInput();
      },
      error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos',
          text: 'Favor de verificar',
        });
        console.log('Datos incorrectos');
        return;
      }
     }
    );
  }

  limpiarInput() {
    this.apart.nombre = '';
    this.apart.fechapartado = '';
    this.apart.fechainicio = '';
    this.apart.fechasalida = '';
    this.apart.diasrentados = '';
    this.apart.totalrenta = '';
    this.apart.adelanto = '';
    this.apart.resto = '';
    this.apart.fechavencimiento = '';
    this.apart.locales_id = '';
  }
}
