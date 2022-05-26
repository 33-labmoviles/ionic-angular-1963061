import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges {

  constructor() {}
  ngOnChanges(): void {
  }
  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC1i"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "123k"
    },
    
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC3"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "A123"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "BC1"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "A23"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "AB23"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "ABC1"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "oskdad"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "2222fsd"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "ddde"
    },
    
  
  ];

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";


  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    }

    this.alumnos.push(nuevoAlumno);

    this.alumnos.sort(function(a, b) {
      var nameA = a.nombre.toUpperCase(); 
      var nameB = b.nombre.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
  
      return 0;
    });
  
      console.log(this.alumnos); 
    }

   
  }

