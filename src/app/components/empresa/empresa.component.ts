import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms'
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private servicioService: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cuit: ['',[Validators.required]],
      usuario: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  public loginEmpresa(loginForm = Array){
    this.servicioService.post('http://localhost:3000/api/login/logine', this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data)
        localStorage.setItem('token', data.token);
        this.router.navigate(['/profemp'])
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
