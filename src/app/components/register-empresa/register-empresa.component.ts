import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { ServicioService } from './../../servicios/servicio.service';

@Component({
  selector: 'app-register-empresa',
  templateUrl: './register-empresa.component.html',
  styleUrls: ['./register-empresa.component.css']
})
export class RegisterEmpresaComponent implements OnInit {

  public signupForm! : FormGroup;

  constructor(private formBuilder :FormBuilder, private servicioService: ServicioService, private router : Router) {   }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      cuit: [''],
      nombre_empresa: [''],
      usuario: [''],
      telefono: [''],
      email: [''],
      password: [''],
      provincia: [''],
      ciudad: [''],
      direccion: ['']
    });
  }

  signUp(){
    this.servicioService.post('http://localhost:3000/api/empresa', this.signupForm.value).subscribe(res=>{

    })
  }

}
