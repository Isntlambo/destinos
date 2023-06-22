import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Origen} from './origen';

@Injectable({
  providedIn: 'root'
})
export class OrigenService {
  private url: string="http://localhost:8080/api/origen"
  constructor(private http:HttpClient){}

  getAll():Observable<Origen[]>{
    return this.http.get<Origen[]>(this.url);
  }

  get(id_Origen:number):Observable<Origen>{
    return this.http.get<Origen>(this.url+'/'+id_Origen);
  }

  create(origen:Origen):Observable<Origen>{
    return this.http.post<Origen>(this.url, origen);
  }

  update(origen:Origen): Observable<Origen>{
    return this.http.put<Origen>(this.url, origen);
  }

  delete(id_Origen:number):Observable<Origen>{
    return this.http.delete<Origen>(this.url+'/'+id_Origen);
  }
}
