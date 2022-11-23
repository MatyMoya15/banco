import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterEmpresaComponent } from './components/register-empresa/register-empresa.component';
import { EmpProfileComponent } from './components/emp_profile/emp_profile.component';
import { PersProfileComponent } from './components/pers-profile/pers-profile.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionPersComponent } from './components/transaccion-pers/transaccion-pers.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { AdministracionEmpresaComponent } from './components/administracion-empresa/administracion-empresa.component';
import { AdministracionPersonaComponent } from './components/administracion-persona/administracion-persona.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contacto", component: ContactComponent},
  {path: "persona", component: PersonaComponent},
  {path: "empresa", component: EmpresaComponent},
  {path: "registro", component: RegisterComponent},
  {path: "registroe", component: RegisterEmpresaComponent},
  {path: "profemp", component: EmpProfileComponent},
  {path: "profpers", component: PersProfileComponent},
  {path: "transac", component: TransaccionComponent},
  {path: "pertransac", component: TransaccionPersComponent},
  {path: "send", component: SendMoneyComponent},
  {path: "prestamo", component: PrestamoComponent},
  {path: "adminpers", component: AdministracionPersonaComponent},
  {path: "adminempr", component: AdministracionEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
