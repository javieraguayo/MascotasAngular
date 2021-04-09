import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent {
  
  profileForm = new FormGroup({
    nombre : new FormControl(''),
    edad : new FormControl(''),
    descripcion : new FormControl(''),
    nombre_tipo : new FormControl(''),
  });
  //obtiene la data del formulario mascota agregar
  async getData(){
    let dataMascota ={
      nombre : this.profileForm.get('nombre')?.value,
      edad : this.profileForm.get('edad')?.value,
      descripcion : this.profileForm.get('descripcion')?.value,
      nombre_tipo : this.profileForm.get('nombre_tipo')?.value
    }
    //fetch para crear mascota metodo POST
    fetch('http://localhost:3000/crearmascotas', {
      method: 'POST',
      body:JSON.stringify(dataMascota),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.log('Error',error)); 
  }
}
