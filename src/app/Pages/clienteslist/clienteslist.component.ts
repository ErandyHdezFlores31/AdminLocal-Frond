import { Component, OnInit } from '@angular/core';
import { clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clienteslist',
  templateUrl: './clienteslist.component.html',
  styleUrls: ['./clienteslist.component.css']
})
export class ClienteslistComponent implements OnInit {
  filterPost = '';
  cargando: boolean = false;
  client: any;
  
  cli: clientes = new clientes;
  pageActual:number = 1;
  order: string = 'id';
  reversa: boolean = false;

  id: any;

  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {
    this.listClientes();
  }
  listClientes() {
    this.cargando = true;
    this.ClientesService.listClientes().subscribe((resp) => {
      this.cargando = false;
      this.client = resp;
      console.log(this.client);
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
      this.ClientesService.deleteClientes(id).subscribe(
        {
         next: (data)=>{
            this.listClientes();
          },
          error: error =>{
            console.log(error);
          }
        }
      )
    }
  }

}
