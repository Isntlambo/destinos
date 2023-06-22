import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {Cliente} from './cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 

  private url:string="http://localhost:8080/api/clientes"

  constructor( private http:HttpClient) { }

  //obtener clientes
  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }
  

  //creat cliente
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }
 //obtener un cliente
  get(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/'+ id);
  }

  //actualizar cliente
  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente);
  }

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/'+id);
  }
}
