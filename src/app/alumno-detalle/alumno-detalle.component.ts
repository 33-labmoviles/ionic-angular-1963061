import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController) { }


  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula);
  }

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

alumnoDetalle: any = {}
  matricula: string = this.ruta.snapshot.params.id;

  obtenerDetalleAlumno(matricula: string): any {
    console.log(matricula);


    
    for(let i = 0; i < this.alumnos.length; i++){
      if(matricula == this.alumnos[i].matricula){
        this.alumnoDetalle = this.alumnos[i];
      }
    }

    return this.alumnoDetalle;
  }


  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'mi-primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}