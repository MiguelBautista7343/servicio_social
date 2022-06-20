import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductividadComponent } from './productividad/productividad.component';
import { ProductosInvestigacionComponent } from './productos-investigacion/productos-investigacion.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    ProductividadComponent,
    ProductosInvestigacionComponent
  ],
  exports: [
HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrincipalModule { }
