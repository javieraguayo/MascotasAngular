import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {


  lista:{nombre:string,edad:number,descripcion:string,nombre_mascota:number}[]=[];
  async ngOnInit(){
    
    const mascotas = await fetch('http://localhost:3000/mascotas');
    const result   = await mascotas.json();
    this.lista = result;
  }

}
