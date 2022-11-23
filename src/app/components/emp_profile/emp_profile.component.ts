import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../servicios/servicio.service';
import { Empresa } from 'src/app/interface/empresa';

@Component({
  selector: 'app-admin',
  templateUrl: './emp_profile.component.html',
  styleUrls: ['./emp_profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  datosE:Array<Empresa>=[];

  constructor(private servicioEmpresa: ServicioService) { }

  ngOnInit(): void {
    this.servicioEmpresa.ConsultarEmpresa().subscribe(datos=>{
      this.datosE = datos.result;
      console.log(this.datosE);
    })
  }

}
