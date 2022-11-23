import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Empresa } from '../interface/empresa';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servidor="http://127.0.0.1:3000";

  constructor(private servicio:HttpClient) { }

  ConsultarEmpresa():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/empresa`);
  }

  ConsultarPersonas():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/persona`);
  }

  public post(url:string, body:any){
    return this.servicio.post(url, body);
  }

}
