import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterEmpresaComponent } from './components/register-empresa/register-empresa.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpProfileComponent } from './components/emp_profile/emp_profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { PersProfileComponent } from './components/pers-profile/pers-profile.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { TransaccionPersComponent } from './components/transaccion-pers/transaccion-pers.component';
import { AdministracionEmpresaComponent } from './components/administracion-empresa/administracion-empresa.component';
import { AdministracionPersonaComponent } from './components/administracion-persona/administracion-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    PersonaComponent,
    EmpresaComponent,
    RegisterComponent,
    RegisterEmpresaComponent,
    EmpProfileComponent,
    TransaccionComponent,
    SendMoneyComponent,
    PersProfileComponent,
    PrestamoComponent,
    TransaccionPersComponent,
    AdministracionEmpresaComponent,
    AdministracionPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
