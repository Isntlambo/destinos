import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.css']
})
export class FormclienteComponent implements OnInit {
  cliente:Cliente = new Cliente();
  titulo:string="Registro de Nuevo Cliente";


  constructor(private clienteService:ClienteService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  
  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if (id) {
          this.clienteService.get(id).subscribe(
            es=>this.cliente=es
          );
      
        }
      }
    );
   
  }

  create():void{
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      res=>this.router.navigate(['/clientes'])
    );
  }

  update(): void{
    this.clienteService.update(this.cliente).subscribe(
      res=>this.router.navigate(['/clientes'])
    );

  }
}
