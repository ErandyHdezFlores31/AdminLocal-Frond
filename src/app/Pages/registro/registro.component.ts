import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  regis: registro = new registro();

  constructor(private router: Router, private Registro: RegistroService) { }

  ngOnInit(): void {
  }

  registro(form: NgForm){
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
    this.Registro.registro(this.regis).subscribe(
    {
      next:   res => {
        console.log(res);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Registro Completo',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('login');
      },
      error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos',
          text: 'Favor de verificarlos',
        });
        console.log('Datos incorrectos');
        return;
      }
    }
    );
  }
}
