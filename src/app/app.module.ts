import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//rutas
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MascotaComponent } from './mascota/mascota.component';
import { MascotasAgregarComponent } from './mascotas-agregar/mascotas-agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascotasEditarComponent } from './mascotas-editar/mascotas-editar.component';

const routes: Routes = [
  { path: 'mascotas', component: MascotaComponent },
  { path: 'mascotas-agregar', component: MascotasAgregarComponent },
  { path: 'inicio', component: InicioComponent },
  //recibe id por parametro
  { path: 'mascotas-editar/:id', component: MascotasEditarComponent},
  //eliminar
  { path: 'mascotas-eliminar/:id', redirectTo:'/mascotas' , pathMatch: 'full'},
  //ruta vacia lleva al inicio
  { path: '', component: InicioComponent, pathMatch: 'full'},
  //nos lleva al inicio al escribir cualquier ruta
  { path: '**', redirectTo:'/', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    MascotaComponent,
    MascotasAgregarComponent,
    MascotasEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
