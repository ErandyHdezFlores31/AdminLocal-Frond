import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApartadosService } from 'src/app/services/apartados.service';
import { apartados } from 'src/app/models/apartados';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalesService } from 'src/app/services/locales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editapartados',
  templateUrl: './editapartados.component.html',
  styleUrls: ['./editapartados.component.css']
})
export class EditapartadosComponent implements OnInit {
  apart: apartados = new apartados;
  datos: any;
 
  listLocal: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private ApartadosService: ApartadosService, private LocalesService: LocalesService) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.ApartadosService.ediApartadosId(id).pipe(
        map((resp: any) => {
          this.apart = resp;
          console.log(this.apart);
          return this.apart
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
    console.log(this.apart);
    if (this.apart.id) {
      this.ApartadosService.editApartados(this.apart).subscribe(
        resp => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se actualizo correctament',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/apartadoslist']);
        });
    }
  }


}
