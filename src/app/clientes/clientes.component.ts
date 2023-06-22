  import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  titulo:string="Lista de Clientes";
  prueba:string="Esto es una prueba del componente clientes";

  clientes!:Cliente[];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
      this.clienteService.getAll().subscribe(
        c =>this.clientes=c
      );
  }

  delete(cliente:Cliente):void {
    console.log ("BORRANDO");
    this.clienteService.delete(cliente.id).subscribe(
      res=>this.clienteService.getAll().subscribe(
        response=>this.clientes=response
      )
    );
  }
}
