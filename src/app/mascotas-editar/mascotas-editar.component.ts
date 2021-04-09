import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {

  constructor(private route:ActivatedRoute){}

  lista:{nombre:string,edad:number,descripcion:string,tipo_id:number}[]=[];
  async ngOnInit(){
    const mascota_id = this.route.snapshot.paramMap.get('id');
    const mascotas = await fetch(`http://localhost:3000/mascotas/${mascota_id}`);
    const result   = await mascotas.json();
    
    console.log("id_mascota : "+ mascota_id);
    this.lista = result;
  }
  //obtiene la data del formulario mascota editar
  profileForm = new FormGroup({
    nombre : new FormControl(''),
    edad : new FormControl(''),
    descripcion : new FormControl(''),
    tipo_id : new FormControl(''),
  });
  async getData(){

    let dataMascota ={
      nombre : this.profileForm.get('nombre')?.value,
      edad : this.profileForm.get('edad')?.value,
      descripcion : this.profileForm.get('descripcion')?.value,
      tipo_id : this.profileForm.get('tipo_id')?.value
    }
    //fetch para crear mascota metodo PUT
    const mascota_id = this.route.snapshot.paramMap.get('id');
    await fetch(`http://localhost:3000/editarmascotas/${mascota_id}`, {
      method: 'PUT',
      body:JSON.stringify(dataMascota),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .catch(error => console.log('Error',error)); 
  }

}
