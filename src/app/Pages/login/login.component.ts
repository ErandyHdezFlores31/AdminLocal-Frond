import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: login = new login();

  constructor(private router: Router, private Login: LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
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
   
    this.Login.login(this.auth).subscribe(
    {
      next:   res => {
        console.log(res);

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Iniciaste sesión correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('agreclientes');
      },
      error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos',
          text: 'Tu correo o contraseña son incorrectos, favor de verificarlos',
        });
        console.log('Datos incorrectos');
        return;
      }
    }
    );
  }
}
