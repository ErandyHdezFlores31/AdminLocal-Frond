import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agrelocales',
  templateUrl: './agrelocales.component.html',
  styleUrls: ['./agrelocales.component.css']
})
export class AgrelocalesComponent implements OnInit {
  loc: locales = new locales();
  cargando: boolean = false;
  list: any;

  constructor(private router: Router, private LocalesService: LocalesService) { }

  ngOnInit(): void {
    this.listLocal();
  }

  listLocal() {
    this.cargando = true;
    this.LocalesService.listLocales().subscribe((resp) => {
      this.cargando = false;
      this.list = resp;
      console.log(this.list);
    });
  }

  agregarLoc(form: NgForm) {
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
    this.LocalesService.agreLocales(this.loc).subscribe(
   {
    next: res => {
      console.log(res);

      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Agregado correctamente',
        showConfirmButton: false,
        timer: 1500,
      });
      this.listLocal();
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

  borrar(id: any){
    if(confirm('Seguro que quiere eliminar este registro?')){
      this.LocalesService.deleteLocales(id).subscribe(
        {
          next: (data)=>{
            this.listLocal();
          },
          error: err =>{
            console.log(err);
          }
        }
      );
    }
  }

  limpiarInput() {
    this.loc.nombrelocal = '';
    this.loc.descripcion = '';
    this.loc.preciodia = '';
  }

}
