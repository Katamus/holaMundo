import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosAgregarComponent } from './usuarios/usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './usuarios/usuarios-editar/usuarios-editar.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';


const routes: Routes = [
  { path: '', component: TitulosComponent},
  { path: 'directiva', component: DirectivaComponent},
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'pipes', component: PipesComponent },
  { path: "eventos", component : TitulosComponent},
  { path: "usuarios", component : UsuariosComponent,children:[
    {
      path: "agregar", component : UsuariosAgregarComponent
    },{
      path: "editar", component : UsuariosEditarComponent
    }
  ] },{
    path: "articulo", component :ArticuloComponent
  },{
    path: "articuloDetalle/:nombre/:precio", component :ArticuloDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
