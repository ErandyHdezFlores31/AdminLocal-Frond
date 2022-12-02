import { Component, OnInit } from '@angular/core';
import { apartados } from 'src/app/models/apartados';
import { ApartadosService } from 'src/app/services/apartados.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  filterPost = '';
  cargando: boolean = false;
  apart: apartados = new apartados;
  apartado:any = [];

  pageActual:number = 1;

  constructor(private router: Router, private activeRoute: ActivatedRoute, 
    private ApartadosService: ApartadosService) { }

  ngOnInit(): void {
    // const fechavencimiento = this.activeRoute.snapshot.paramMap.get('fechavencimiento');
    // if (fechavencimiento !== 'nuevo') {
    //   this.ApartadosService.apartadosVen(fechavencimiento).pipe(
    //     map((resp: any) => {
    //       this.apart = resp;
    //       console.log(this.apart);
    //       return this.apart
    //     })
    //   ).subscribe();
    // }
  }



 
}
