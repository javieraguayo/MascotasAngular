import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
//listar mascotas
export class MascotaComponent implements OnInit {

  constructor(private route:ActivatedRoute){}
  lista:{mascota_id:number,nombre:string,edad:number,descripcion:string,nombre_tipo:number}[]=[];
  async ngOnInit(){
    this.listarmascotas();
  }

  async listarmascotas(){
    const mascotas = await fetch('http://localhost:3000/mascotas');
    const result   = await mascotas.json();
    this.lista = result;
  }

  eliminarmascota(mascota_id:any){
    
    fetch(`http://localhost:3000/eliminarmascotas/${mascota_id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .catch(error => console.log('Error',error)); 

    this.listarmascotas();
    
  }

  
  
}
