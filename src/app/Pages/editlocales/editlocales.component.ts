import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { LocalesService } from 'src/app/services/locales.service';
import { locales } from 'src/app/models/locales';
import { ActivatedRoute, Router } from '@angular/router';
// import { CategoriasService } from '';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editlocales',
  templateUrl: './editlocales.component.html',
  styleUrls: ['./editlocales.component.css']
})
export class EditlocalesComponent implements OnInit {
  local: locales = new locales;
  datos: any;
 
  // listCat: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
     private LocalesService: LocalesService) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.LocalesService.localesEditId(id).pipe(
        map((resp: any) => {
          this.local = resp;
          console.log(this.local);
          return this.local
        })
      ).subscribe();
    }
    // this.CategoriasService.listCategorias().subscribe((resp) => {
    //   this.listCat = resp;
    //   console.log(this.listCat);
    // });
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
    console.log(this.local);
    if (this.local.id) {
      this.LocalesService.editLocales(this.local).subscribe(
        resp => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se actualizo correctament',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/localeslist']);
        });
    }
  }

}
