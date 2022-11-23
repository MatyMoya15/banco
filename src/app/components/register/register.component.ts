import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {ServicioService} from './../../servicios/servicio.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private servicioService : ServicioService, private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      telefono: [''],
      email: [''],
      usuario: [''],
      password: [''],
      provincia: [''],
      ciudad: [''],
      direccion: [''],
      nacimiento: ['']
    })
  }

  signUp(){
    this.servicioService.post('http://localhost:3000/api/persona', this.signupForm.value).subscribe(res=>{

    })
  }

}
