import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../firebase-database.service';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  constructor(private db : FirebaseDatabaseService) { }
  ngOnInit() {
    this.cargarAlumnos();
  }

  alumnos: any = [];


  cargarAlumnos() {
    this.db.getAlumnos().subscribe(res => {
      this.alumnos = res;
    })
  }
}