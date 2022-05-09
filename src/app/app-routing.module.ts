import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';




import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';


import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

{path:'',redirectTo:'entrar', pathMatch:'full'},

// principais
{path:'entrar',component:EntrarComponent},
{path:'cadastrar',component:CadastrarComponent},
{path:'home',component:HomeComponent},

{path:'usuarios',component:UsuariosComponent},
// edits



// deletes





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
