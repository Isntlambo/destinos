import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormclienteComponent } from './clientes/formcliente.component';
import { OrigenComponent } from './origen/origen.component';
import { ItinerarioComponent } from './itinerario/itinerario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormorigenComponent } from './origen/formorigen.component';
const routes:Routes=[
  { path:'', redirectTo:'/clientes', pathMatch:'full'},
  { path:'', redirectTo:'/origen', pathMatch:'full'},
  //clientes routes
  { path:'clientes/nuevo', component:FormclienteComponent},
  { path:'clientes/form', component:FormclienteComponent},
  { path:'clientes/form/:id', component:FormclienteComponent},
  { path:'clientes', component:ClientesComponent},
  //itinerario routes
  { path:'itinerario', component:ItinerarioComponent},
  //origen routes
  { path:'origen', component:OrigenComponent},
  { path:'origen/form', component:FormorigenComponent},
  { path:'origen/nuevo', component:FormorigenComponent},
  { path:'origen/form/:id', component:FormorigenComponent},
  // inicio route
  { path:'inicio', component:InicioComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    //cliente module
    ClientesComponent,
    FormclienteComponent,
    //origen module
    OrigenComponent,
    FormorigenComponent,
    //itinerario module
    ItinerarioComponent,
    //navbar+inicio moduel
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
