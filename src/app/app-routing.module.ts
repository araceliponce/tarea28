import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { ErrorComponent } from './principal/error/error.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { NotfoundComponent } from './principal/notfound/notfound.component';
import { CalculadoraComponent } from './principal/calculadora/calculadora.component';



const routes: Routes = [
  {path:'', component: LoginComponent, title:'Iniciar sesion'},
  {path:'login', component: LoginComponent, title:'Iniciar sesion'},
  {path:'calculadora', component: CalculadoraComponent, title:'Calculadora'},
  {path:'error', component: ErrorComponent, title:'Error'},
  {path:'home/:username', component: HomeComponent, title:'Home ALL', canActivate: [CanactivateGuard]},
  {path:'home', component: HomeComponent, title:'Home', canActivate:[CanactivateGuard]},
  {path:'**', component: NotfoundComponent, title: 'Pagina no encontrada'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
