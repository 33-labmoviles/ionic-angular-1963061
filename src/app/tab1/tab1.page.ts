import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABC123"
    },
    
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC123"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC123"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "ABC123"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "ABC123"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "ABC123"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "ABC123"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "ABC123"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "ABC123"
    },
  
  ];
}