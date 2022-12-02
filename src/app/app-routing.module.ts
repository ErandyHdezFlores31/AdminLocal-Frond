import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { AgrelocalesComponent } from './Pages/agrelocales/agrelocales.component';
import { AgreclientesComponent } from './Pages/agreclientes/agreclientes.component';
import { AgreapartadosComponent } from './Pages/agreapartados/agreapartados.component';
import { LocaleslistComponent } from './Pages/localeslist/localeslist.component';
import { ClienteslistComponent } from './Pages/clienteslist/clienteslist.component';
import { ApartadoslistComponent } from './Pages/apartadoslist/apartadoslist.component';
import { AlertasComponent } from './Pages/alertas/alertas.component';
import { EditlocalesComponent } from './Pages/editlocales/editlocales.component';
import { EditclientesComponent } from './Pages/editclientes/editclientes.component';
import { EditapartadosComponent } from './Pages/editapartados/editapartados.component';

import { LocdisponiblesComponent } from './Pages/locdisponibles/locdisponibles.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'agrelocales', component: AgrelocalesComponent },
  { path: 'agreclientes', component: AgreclientesComponent },
  { path: 'agreapartados', component: AgreapartadosComponent },
  { path: 'localeslist', component: LocaleslistComponent },
  { path: 'clienteslist', component: ClienteslistComponent },
  { path: 'apartadoslist', component: ApartadoslistComponent },
  { path: 'alertas', component: AlertasComponent },
  { path: 'localesdisp', component: LocdisponiblesComponent },
  { path: 'editlocales/:id', component: EditlocalesComponent },
  { path: 'editclientes/:id', component: EditclientesComponent },
  { path: 'editapartados/:id', component: EditapartadosComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
