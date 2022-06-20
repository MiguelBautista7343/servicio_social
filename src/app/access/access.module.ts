import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/LoginComponent";
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { RecoverCurpComponent } from './recover-curp/recover-curp.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    RecoverCurpComponent
  ],
  exports: [
    LoginComponent,
    RecoverComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule
  ]
})
export class AccessModule { }
