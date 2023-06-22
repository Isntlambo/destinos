import { Component, OnInit } from '@angular/core';
import { Origen } from './origen';
import { OrigenService } from './origen.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formorigen',
  templateUrl: './formorigen.component.html',
  styleUrls: ['./formorigen.component.css']
})
export class FormorigenComponent implements OnInit {
  origen:Origen = new Origen();
  titulo:string="Registro de Nuevo Origen";


  constructor(private origenService:OrigenService, private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id_Origen=e['id_Origen'];
        if (id_Origen){
          this.origenService.get(id_Origen).subscribe(
            es=>this.origen=es
          );
        }
      }
    );
  }
  
  create():void{
    console.log(this.origen);
    this.origenService.create(this.origen).subscribe(
      res=>this.router.navigate(['/origen'])
    );
  }

  update():void{
    this.origenService.update(this.origen).subscribe(
      res=>this.router.navigate(['/origen'])
    );
  }
}
