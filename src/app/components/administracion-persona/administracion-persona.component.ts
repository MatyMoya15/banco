import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Persona } from 'src/app/interface/persona';

@Component({
  selector: 'app-administracion-persona',
  templateUrl: './administracion-persona.component.html',
  styleUrls: ['./administracion-persona.component.css']
})
export class AdministracionPersonaComponent implements OnInit {

  datosP:Array<Persona>=[];

  constructor(private servicioPersona : ServicioService) { }

  ngOnInit(): void {
    this.servicioPersona.ConsultarPersonas().subscribe(datos=>{
      this.datosP = datos.result;
      console.log(this.datosP)
    })
  }

}
