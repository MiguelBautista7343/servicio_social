import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./access/login/LoginComponent";
import { RecoverCurpComponent } from './access/recover-curp/recover-curp.component';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { HomeComponent } from './principal/home/home.component';
import { ProductividadComponent } from './principal/productividad/productividad.component';
import { ProductosInvestigacionComponent } from './principal/productos-investigacion/productos-investigacion.component';
import { ProfileComponent } from './principal/profile/profile.component';

const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'recover', component:RecoverComponent},
  {path:'home', component:HomeComponent},
  {path:'recover-curp', component:RecoverCurpComponent},
  {path:'profile', component:ProfileComponent},
  {path:'productividad', component:ProductividadComponent},
  {path:'productos-investigacion', component: ProductosInvestigacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
