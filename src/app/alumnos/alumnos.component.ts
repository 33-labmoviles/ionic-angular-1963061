import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123g",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABfC123",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC13",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "AC123",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "AB3",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "BC123",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "ABC12",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "BC123",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "AB123",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "A13",
      "imagen": "assets/imagenes/cbum.jpg"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "A123",
      "imagen": "assets/imagenes/cbum.jpg"
    },
  ];
}