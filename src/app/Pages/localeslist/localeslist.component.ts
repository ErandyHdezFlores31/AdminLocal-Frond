import { Component, OnInit } from '@angular/core';
import { locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-localeslist',
  templateUrl: './localeslist.component.html',
  styleUrls: ['./localeslist.component.css']
})
export class LocaleslistComponent implements OnInit {
  filterPost = '';
  cargando: boolean = false;
  local: any;
  
  loc: locales = new locales;
  pageActual:number = 1;
  order: string = 'id';
  reversa: boolean = false;

  id: any;

  constructor(private LocalesService: LocalesService) { }

  ngOnInit(): void {
    this.listLocales();
  }
  listLocales() {
    this.cargando = true;
    this.LocalesService.listLocales().subscribe((resp) => {
      this.cargando = false;
      this.local = resp;
      console.log(this.local);
    });
  }

  ordenar(order: string){
    if (this.order === order){
      this.reversa = !this.reversa;
    }
    this.order = order;
  }

  borrar(id: any){
    if(confirm('Seguro que quiere eliminar este registro?')){
      this.LocalesService.deleteLocales(id).subscribe(
        {
         next: (data)=>{
            this.listLocales();
          },
          error: error =>{
            console.log(error);
          }
        }
      )
    }
  }


}
