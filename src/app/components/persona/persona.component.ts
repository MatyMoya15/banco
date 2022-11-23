import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms'
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuiler : FormBuilder, private servicioService: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuiler.group({
      dni: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public loginPersona(loginForm = Array){
    this.servicioService.post('http://localhost:3000/api/login/loginp', this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data)
        localStorage.setItem('token', data.token);
        this.router.navigate(['/profpers'])
      }, error: (err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'ha ocurrido un error',
          text: 'Usuario o contraseña incorrecta'
        })
      },
      complete: () => console.log('completado')
    })
  }

}
