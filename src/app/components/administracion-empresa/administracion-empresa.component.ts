import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interface/empresa';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-administracion-empresa',
  templateUrl: './administracion-empresa.component.html',
  styleUrls: ['./administracion-empresa.component.css']
})
export class AdministracionEmpresaComponent implements OnInit {

  datosE: Array<Empresa>=[];

  constructor(private servicioEmpresa : ServicioService) { }

  ngOnInit(): void {
    this.servicioEmpresa.ConsultarEmpresa().subscribe(datos=>{
      this.datosE = datos.result;
      console.log(this.datosE)
  })
  }

}
