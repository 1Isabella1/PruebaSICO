import { Component,ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from '../Servicios/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //@Output()  IdEstudiante: EventEmitter<any> = new EventEmitter<any>();

  IdEstudiante: any;

  //servicio: ApiService = new ApiService();

  datos: Estudiante[] = [];
  datoscopia: Estudiante[] = [];

  ngOnInit(){
    fetch('http://localhost:5274/api/Estudiante/ListaEstudiante').then((response) => response.json()).then(x => this.datos = this.datoscopia = x.response);
  }

  columnas: string[] = ['identificacion', 'nombre', 'apellido', 'email', 'cursos'];

  //datos: Estudiante[] = [new Estudiante(1, 'papas', 'aaa'),
  //new Estudiante(2, 'manzanas', 'ddd'),
  //new Estudiante(33, 'naranjas', 'hgd'),
  //];

  //datoscopia: Estudiante[] = [new Estudiante(1, 'papas', 'aaa'),
  //new Estudiante(2, 'manzanas', 'ddd'),
  //new Estudiante(33, 'naranjas', 'hgd'),
  //];
 
  estudianteselect: Estudiante = new Estudiante("", "", "", "");

  @ViewChild(MatTable) table1!: MatTable<Estudiante>;

  seleccionarId(Id: string) {
    this.IdEstudiante = Id;
    //this.IdEstudiante.emit(Id)
  }


  buscarID(idEs: string) {
    this.datos = idEs != null ? this.datoscopia.filter(x => x.identificacion == idEs) : this.datoscopia;
    this.table1.renderRows();
  }

  limpiarfiltro() {
    this.datos = this.datoscopia;
    this.table1.renderRows();
    this.estudianteselect.identificacion = "";
  }
}


export class Estudiante {
  constructor(public identificacion: string = "", public nombre1: string = "", public apellido1: string = "", public email: string = "") {
  }
}



