import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Alumno} from './alumno';
import { Observable } from 'rxjs';

//import {map, tap, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //GET
  getAlumnos(): Observable<Alumno> {
    return this.http.get<Alumno>('https://alumnos-12589-default-rtdb.firebaseio.com/alumnos.json')
    .pipe(
      //tap(_ => this.log('alumnos')),
      //catchError(this. <Alumno>('alumno', []))
    )
  }

  getAlumnoDetalle(id: number){
    return this.http.get('https://alumnos-12589-default-rtdb.firebaseio.com/alumnos/'+ id + '.json')
  }

  //POST
  postAlumno(nuevoAlumno: any){
    return this.http.post('https://alumnos-12589-default-rtdb.firebaseio.com/alumnos.json', nuevoAlumno)
  }
  //DELETE
  deleteAlumno(alumno: string) {
    return this.http.delete('https://alumnos-12589-default-rtdb.firebaseio.com/alumnos/' + alumno+'.json' )
  }

  //PUT
  actualizarAlumno(id: number , nuevosDatos: string) {
    return this.http.put('https://alumnos-12589-default-rtdb.firebaseio.com/alumnos/' + id + '.json', nuevosDatos )
  }
}