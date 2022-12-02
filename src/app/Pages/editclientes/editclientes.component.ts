import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ClientesService } from 'src/app/services/clientes.service';
import { clientes } from 'src/app/models/clientes';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalesService } from 'src/app/services/locales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrls: ['./editclientes.component.css']
})
export class EditclientesComponent implements OnInit {
  client: clientes = new clientes;
  datos: any;
 
  listLocal: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private ClientesService: ClientesService, private LocalesService: LocalesService ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.ClientesService.ediId(id).pipe(
        map((resp: any) => {
          this.client = resp;
          console.log(this.client);
          return this.client
        })
      ).subscribe();
    }
    this.LocalesService.listLocales().subscribe((resp) => {
      this.listLocal = resp;
      console.log(this.listLocal);
    });
  }

  guardar(from: NgForm) {
    if (from.invalid) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Favor de verificar los datos ingresados',
        timer: 1500,
      });
      console.log('Formulario no valido');
      return;
    }
    console.log(this.client);
    if (this.client.id) {
      this.ClientesService.editClientes(this.client).subscribe(
        resp => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se actualizo correctament',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/clienteslist']);
        });
    }
  }

}
