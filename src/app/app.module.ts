import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './access/register/register.component';
import { RecoverComponent } from './access/recover/recover.component';
import { LoginComponent } from "./access/login/LoginComponent";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
