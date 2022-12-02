import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
import { clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { LocalesService } from 'src/app/services/locales.service';

import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agreclientes',
  templateUrl: './agreclientes.component.html',
  styleUrls: ['./agreclientes.component.css']
})
export class AgreclientesComponent implements OnInit {
  cli: clientes = new clientes();
  cargando: boolean = false;
  list: any;
  listLoc: any;

  // localsid:any;
  
  pageActual:number = 1;
  order: string = 'id';
  reversa: boolean = false;

  
  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private ClientesService: ClientesService,
    private LocalesService: LocalesService) { }

  ngOnInit(): void {

    this.listClient();
    this.listLocal();
  }

  listClient() {
    this.cargando = true;
    this.ClientesService.listClientes().subscribe((resp) => {
      this.cargando = false;
      this.list = resp;
      console.log(this.list);
    });
  }

  listLocal() {
    this.LocalesService.listLocales().subscribe((resp) => {
      this.listLoc = resp;
      console.log(this.listLoc);
    });
  }


  ordenar(order: string){
    if (this.order === order){
      this.reversa = !this.reversa;
    }
    this.order = order;
  }

  localAgregar(form: NgForm) {
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
    this.ClientesService.agreClientes(this.cli).subscribe(
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
        this.limpiarInput();
        console.log('Datos incorrectos');
        return;
      }
    }
    );
  }



  limpiarInput() {
    this.cli.nombre = '';
    this.cli.apellidos = '';
    this.cli.telefono = '';
    this.cli.correo = '';
    this.cli.fechainiciorenta = '';
    this.cli.fechasalida = '';
    this.cli.diasrentados = '';
    this.cli.totalrenta = '';
    this.cli.locales_id = '';
  }
}
