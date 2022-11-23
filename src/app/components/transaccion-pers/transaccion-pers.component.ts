import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Persona } from 'src/app/interface/persona';

@Component({
  selector: 'app-transaccion-pers',
  templateUrl: './transaccion-pers.component.html',
  styleUrls: ['./transaccion-pers.component.css']
})
export class TransaccionPersComponent implements OnInit {

  datosP:Array<Persona>=[];

  constructor(private servicioPersona: ServicioService) { }

  ngOnInit(): void {
    this.servicioPersona.ConsultarPersonas().subscribe(datos=>{
      this.datosP = datos.result;
      console.log(this.datosP);
    })
  }

}
