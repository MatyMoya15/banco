import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Empresa } from 'src/app/interface/empresa';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  datosE:Array<Empresa>=[];

  constructor(private servicioEmpresa: ServicioService) { }

  ngOnInit(): void {
    this.servicioEmpresa.ConsultarEmpresa().subscribe(datos=>{
      this.datosE = datos.result;
      console.log(this.datosE);
    })
  }

}
