import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';


import { BusquedaPipe } from './Pipes/busqueda.pipe';
import { BusapartadosPipe } from './Pipes/busapartados.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgrelocalesComponent } from './Pages/agrelocales/agrelocales.component';
import { AgreclientesComponent } from './Pages/agreclientes/agreclientes.component';
import { AgreapartadosComponent } from './Pages/agreapartados/agreapartados.component';
import { LocaleslistComponent } from './Pages/localeslist/localeslist.component';
import { ClienteslistComponent } from './Pages/clienteslist/clienteslist.component';
import { ApartadoslistComponent } from './Pages/apartadoslist/apartadoslist.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { AlertasComponent } from './Pages/alertas/alertas.component';
import { LocdisponiblesComponent } from './Pages/locdisponibles/locdisponibles.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditlocalesComponent } from './Pages/editlocales/editlocales.component';
import { EditclientesComponent } from './Pages/editclientes/editclientes.component';
import { EditapartadosComponent } from './Pages/editapartados/editapartados.component';
import { BusclientsPipe } from './Pipes/busclients.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgrelocalesComponent,
    AgreclientesComponent,
    AgreapartadosComponent,
    LocaleslistComponent,
    ClienteslistComponent,
    ApartadoslistComponent,
    RegistroComponent,
    LoginComponent,
    AlertasComponent,
    LocdisponiblesComponent,
    NavbarComponent,
    EditlocalesComponent,
    EditclientesComponent,
    EditapartadosComponent,
    BusquedaPipe,
    BusapartadosPipe,
    BusclientsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
